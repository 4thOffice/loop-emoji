From [https://github.com/ahkohd/ngx-emoj](https://github.com/ahkohd/ngx-emoj)

## How to build and use in DTA

1. Change src code   
2. Run `ng build loop-emoji`
3. Go to dist/loop-emoji and copy content
4. Post content to master branch (change line in package.json if it includes commit id)

Possible inclusions:

```json
...
"loop-emoji": "git+ssh://git@github.com/4thOffice/loop-emoji.git#5d79527af5d16531f6cda15bbb315dc07349fbd3",
...
```   

or

```json
...
"loop-emoji": "git+ssh://git@github.com/4thOffice/loop-emoji.git#master",
...
```   