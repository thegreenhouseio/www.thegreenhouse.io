pipeline {
  agent any

  // this tool will be used for all stages/steps except over-written
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

    stage('Deploy') {
      when {
        // Only deploy when building from the master branch
        expression { BRANCH_NAME == 'master' }
      }
      steps {
          sh "yarn release"
      }
    }

  }
}