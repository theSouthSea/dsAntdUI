#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build-storybook

# 进入生成的文件夹
cd storybook-static

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f https://github.com/Zack921/Zack921.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/theSouthSea/dsAntdUI.git master:gh-pages

cd -