pipeline {
  agent any
  stages {
    stage('Pre') {
      steps {
        sh '''whoami
pwd
echo $PATH
echo $HOME'''
      }
    }

    stage('Build') {
      steps {
        sh '''npm install
npm run docs:build'''
      }
    }

    stage('Copy') {
      steps {
        sh '''cp -r /var/lib/jenkins/workspace/vitepress-akcstudio/docs/.vitepress/dist/* /var/www/html/akcstudio.online/'''
      }
    }

  }
}