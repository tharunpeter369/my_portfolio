# place .nojekull to bypass jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'yourdomain.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:tharunpeter369/vite-deploy.git master:gh-pages





