const fs=require('node:fs');
const s=fs.readFileSync('index.html','utf8');
for(const x of ['Short-Form Content Repurposer','id="form"','sourceType','brandVoice','outputLanguage','TikTok','Instagram / Reels','YouTube Shorts','On-screen text / beat plan','Carousel / hashtag plan','Title + spoken script','Post / thread','localStorage','https://www.pratix.io/en/content-repurposer']){
  if(!s.includes(x)) throw new Error(`missing ${x}`);
}
const scripts=[...s.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m=>m[1]);
if(!scripts.length) throw new Error('inline app script missing');
fs.writeFileSync('/tmp/pratix-repurposer.js',scripts.at(-1));
console.log('content repurposer checks passed');
