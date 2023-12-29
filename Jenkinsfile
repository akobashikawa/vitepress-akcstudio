pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''whoami
pwd
echo $PATH
echo $HOME
npm install
npm run docs:build
cp -r /var/lib/jenkins/workspace/vitepress-akcstudio/docs/.vitepress/dist/* /var/www/html/akcstudio.online/'''
      }
    }

    stage('Pre') {
      steps {
        sh '''whoami
pwd
echo $PATH
echo $HOME'''
      }
    }

  }
}