const { Client } = require('@notionhq/client');

const notion = new Client({ auth: 'secret_PKbucQtvPK2s3IhbOxJMUbrMFWr58pcD36Y55g371Kn' });

(async () => {
  const databaseId = '5968aaa99212447792579a37b85c453a';
  const response = await notion.databases.retrieve({ database_id: databaseId });
  console.log(response);
})();
