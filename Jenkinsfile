pipeline {
  agent any

  stages {
    
    stage('Install Dependencies') {
      steps {
        yarn install
      }
    }

    stage('Test') {
      steps {
        echo 'Testing..'
      }
    }

    stage('Build') {
      steps {
        yarn build
      }
    }

    stage('Deploy') {
      steps {
        echo 'Deploying....'
      }
    }

  }
}