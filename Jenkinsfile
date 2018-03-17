pipeline {
  agent any

  environment {
    AWS_ACCESS_KEY_ID     = credentials('jenkins-aws-secret-key-id')
    AWS_SECRET_ACCESS_KEY = credentials('jenkins-aws-secret-access-key')
  }

  tools {
    nodejs "node-8.9.4"
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
    stage('Deploy') {
      when {
        expression { BRANCH_NAME == 'master' }
      }
      steps {
        sh "yarn release"
      }
    }

  }
}