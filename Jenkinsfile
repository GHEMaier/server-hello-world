pipeline {
  agent any
  stages {
    stage('Stage 1') {
      steps {
        sh '''#!/bin/bash
echo "Done Stage 1"
'''
      }
    }

    stage('Stage 2') {
      steps {
        sh '''#!/bin/bash
echo "Done Stage 2"
'''
      }
    }

    stage('Stage 3') {
      steps {
        sh '''#!/bin/bash
echo "Done Stage 3"
'''
      }
    }

    stage('Deploy') {
      steps {
        sh '''#!/bin/bash
echo "Done - DEPLOYED"
'''
      }
    }

  }
}