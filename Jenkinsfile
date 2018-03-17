pipeline {
  agent any

  stages {
    
    stage('Install Dependencies') {
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
      steps {
        echo 'Deploying....'
      }
    }

  }
}