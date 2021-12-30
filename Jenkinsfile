pipeline {
  agent {
    docker {
      image: 'cypress/base:12'
    }
  }

  stages {
    stage('Download the dependencies') {
      steps {
        sh "npm install"
      }
    }
  }
}