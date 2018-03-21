
const AWS = require('aws-sdk');
const fs = require('fs');
const glob = require('glob');
const s3 = new AWS.S3();
const cloudfront = new AWS.CloudFront();

const AWS_REGION = 'us-east-1';
const S3_BUCKET = 'www.thegreenhouse.io';
const S3_KEY_INDEX_HTML = 'index.html';

AWS.config.region = AWS_REGION;

// helpful for simple debugging
// s3.listBuckets(function(err, data) {
//   if (err) {
//     console.log("Error:", err);
//   } else {
//     for (var index in data.Buckets) {
//       let bucket = data.Buckets[index];
//       console.log("Bucket: ", bucket.Name, ' : ', bucket.CreationDate);
//     }
//   }
// });

// uploads the build directory to S3, our "main method"
glob('./public/**/**', function (er, files) {
  for (let i = 0, l = files.length; i < l; i += 1) {
    const filename = files[i];
    const s3Filename = filename.replace('./public/', '');

    //upload only files
    if (s3Filename.indexOf('.') > 0) {
      const extension = filename.slice(filename.lastIndexOf('.'));
      const contentType = getContentType(extension);
      const body = fs.readFileSync(filename); //.pipe(zlib.createGzip());

      const s3 = new AWS.S3({
        params: {
          Bucket: S3_BUCKET,
          Key: s3Filename,
          ContentType: contentType,
          ACL: 'public-read'
        }
      });

      s3.upload({Body: body}).on('httpUploadProgress', (httpUploadProgress)).send(httpUploadSend);
    }
  }
});

// mainly here so there's something fun to see in the jenkins build 
function httpUploadProgress(evt) {
  console.log(evt);
}

// watches for index.html upload and triggers a cache bust in cloudfront
function httpUploadSend(err, data) {
  console.log(err, data);
  // trigger an invalidation to cache bust the site on each release
  if (!err && data.key === S3_KEY_INDEX_HTML) {
    invalidateCloudfrontDistribution();
  }
}

// creates an invalidatation in cloudfront for /index.html for cache busting on each release
function invalidateCloudfrontDistribution() {
  const params = {
    DistributionId: process.env.AWS_CLOUDFRONT_DISTRIBUTION_ID,
    InvalidationBatch: {
      CallerReference: 'jenkins-release' + new Date().getTime(),
      Paths: { 
        Quantity: 1, 
        Items: [`/${S3_KEY_INDEX_HTML}`]
      }
    }
  };
  
  cloudfront.createInvalidation(params, function(err, data) {
    if (err) {
      console.log(`FAILED: ${S3_KEY_INDEX_HTML} invlidation request`);
      console.log(err, err.stack); // an error occurred
    } else { 
      console.log(`SUCCESS: ${S3_KEY_INDEX_HTML} invlidation request`);
    }
  });
}

// appropriately set objects content-type when uploading build to S3
function getContentType(extension) {
  let contentType = '';

  switch (extension) {
    case '.eot':
      contentType = 'application/vnd.ms-fontobject';
      break;
    case '.jpg':
      contentType = 'image/jpeg';
      break;
    case '.js':
      contentType = 'application/javascript';
      break;
    case '.otf':
      contentType = 'application/x-font-opentype';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.svg':
      contentType = 'image/svg+xml';
      break;
    case '.ttf':
      contentType = 'application/x-font-ttf';
      break;
    case '.woff':
      contentType = 'application/font-woff';
      break;
    case '.woff2':
      contentType = 'application/font-woff2';
      break;
    default:
      contentType = 'text/' + extension.replace('.', '');
      break;
  }

  return contentType;
}