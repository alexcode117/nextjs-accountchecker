import { Client } from '@hiveio/dhive';

const NODE_URLS = [
  'https://api.hive.blog',
  'https://api.hivekings.com'
];

const client = new Client(NODE_URLS);

export { client };