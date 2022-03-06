import { Video } from "../utils/VideoService";

const tags = new Set<string>();
tags.add("Science");
tags.add("VideoGame");
tags.add("Tool");

const testTags = new Set<string>();
testTags.add("VideoGame");
testTags.add("Tool");
testTags.add("Science");

const a: Video = new Video({ tags: tags });
const b: Video = new Video({ tags: testTags });

console.assert(a.equals(b));

b.content.tags.delete("Science");

console.assert(a.equals(b));
