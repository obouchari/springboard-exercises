# github_exercise

## PART I

1. Create a local repository and add and commit some files

  ```bash
  git init
  echo "sample text" > sample.txt
  git add sample.txt
  git commit -m "Add sample text"
  ```

2. Create a remote repository and push your code from the local repo to the remote

  ```bash
  git remote add origin git@github.com:obouchari/github_exercise.git
  git push -u origin main
  ```

3. Create a local branch and add and commit some files

  ```bash
  git checkout -b new_features
  touch index.html app.css app.js
  git add .
  git commit -m "Add project files"
  ```

4. Push that local branch to GitHub to create a remote branch

  ```bash
  git push origin new_features
  ```


## PART II

Memory game Github repo:
[https://github.com/obouchari/memory-game](https://github.com/obouchari/memory-game)