## Part I
#### Answer the following questions:

1. What git command creates a branch?
```
$ git checkout -b BRANCH_NAME
```

2. What is the difference between a fast-forward and recursive merge?
Fast-forward algorithm is used when you have a linear history of commits and no new commits on to be-merged-to branch. On the other hand, recursive merge is required when both branches have some conflicting commits and requires manual fixing by creating a merge commit.

3. What git command changes to another branch?
```
$ git checkout BRANCH_NAME
```

4. What git command deletes a branch?
```
$ git branch -d BRANCH_NAME
```

5. How do merge conflicts happen?
Merge conflicts happen when you have different commit history on both branches.

## Part II
Practice with fast forward and recursive merges! Make a branch and add and commit onto it and merge it back into master.
```
$ git checkout -b new_feature
$ touch new_file.txt
$ echo "creating cool feature" > new_file.txt
$ git add new_file.txt
$ git commit -m "Add new feature"
$ git checkout master
$ git merge new_feature
```

Try to create your own merge conflict by modifying the same file on two separate commits on two separate branches.
```
$ git checkout -b change_css
$ vi app.css // made changes
$ git add app.css
$ git commit -m "Add new styles"
$ git checkout master
$ vi app.css // made conflicting changes
$ git add app.css
$ git commit -m "Add more styles"
$ git merge change_css
```