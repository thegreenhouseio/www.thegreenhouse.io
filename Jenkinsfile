pipeline {
  agent any

  environment {
    AWS_ACCESS_KEY_ID     = credentials('jenkins-aws-secret-key-id')
    AWS_SECRET_ACCESS_KEY = credentials('jenkins-aws-secret-access-key')
    AWS_CLOUDFRONT_DISTRIBUTION_ID_PROD = credentials('jenkins-aws-cloudfront-distribution-id-prod')
    AWS_CLOUDFRONT_DISTRIBUTION_ID_STAGE = credentials('jenkins-aws-cloudfront-distribution-id-stage')
  }

  tools {
    nodejs "node-8.9.4"
  }

  parameters {
    booleanParam(defaultValue: false, description: 'Production Release toggle', name: 'IS_PRODUCTION_RELEASE')
  }

  stages {
    
    stage('Prep') {
      steps {
        sh "yarn install"
      }
    }

    stage('Test') {
      steps {
        echo 'Testing..'
      }
    }

    stage('Build') {
      steps {
        sh "yarn build"
      }
    }

    // Only deploy when building from the master branch
    // stage by default, otherwise prod if IS_PRODUCTION_RELEASE is true
    stage('Deploy') {
      when {
        expression { BRANCH_NAME == 'master' }
      }
      steps {
        when {
          expression { IS_PRODUCTION_RELEASE == 'true' }
        }
        sh "yarn release --release_env=prod"
        
        when {
          expression { IS_PRODUCTION_RELEASE == 'false' }
        }
        sh "yarn release --release_env=staging"
      }
    }

  }
}