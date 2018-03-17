pipeline {
  agent any

  stages {
    
    stage('Build') {
      steps {
        yarn build
      }
    }

    stage('Test') {
      steps {
        echo 'Testing..'
      }
    }

    stage('Deploy') {
      steps {
        echo 'Deploying....'
      }
    }

  }
}