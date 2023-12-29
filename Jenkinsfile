pipeline {
  agent any

  tools {nodejs "Node 18"}

  stages {
    stage('Pre') {
      steps {
        sh '''whoami
pwd
echo $PATH
echo $HOME
node --version'''
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