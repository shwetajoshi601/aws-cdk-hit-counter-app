#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CdkWorkshopSjStack } from '../lib/cdk-workshop-sj-stack';

const app = new cdk.App();
new CdkWorkshopSjStack(app, 'CdkWorkshopSjStack');
