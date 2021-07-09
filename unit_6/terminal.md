## Part I:

1. make a directory called first
```
$ mkdir first
```

2. change directory to the first folder
```
$ cd first
```

3. create a file called person.txt
```
$ touch person.txt
```

4. change the name of person.txt to another.txt
```
$ mv person.txt another.txt
```

5. make a copy of the another.txt file and call it copy.txt
```
$ cp another.txt copy.txt
```

6. remove the copy.txt file
```
$ rm copy.txt
```

7. make a copy of the first folder and call it second
```
$ cp -r first second
```

8. delete the second folder
```
$ rm -rf second 
```

## Part II:

1. What does the man command do? Type in man rm. How do you scroll and get out?
man is short for manual, it displays the command's description as well as details about the available options.
To scroll we use ```Enter``` and to exit press ```q```.

2. Look at the man page for ls. What does the ```-l``` flag do? What does the ```-a``` flag do?
-l flag list in long format.
-a flag include directory entries whose names begin with a dot (.).

3. How do you jump between words in the terminal?
Press ```Option + left/right arrows```.

4. How do you get to the end of a line in terminal?
Either press ```Ctrl + e``` or ```Cmd + right arrow```.

5. How do you move your cursor to the beginning in terminal?
Either press ```Ctrl + a``` or ```Cmd + left arrow```.

6. How do you delete a word (without pressing backspace multiple times) in terminal?
```Ctrl + w```.

7. What is the difference between a terminal and shell?
Shell is the interface that allow us to access the operating system services through a commend-line interface (CLI) or Terminal which is a graphical window that lets interact with the shell.

8. What is an absolute path?
An absolute path is a full path to access a specific resource.

9. What is a relative path?
A relative path is, as the name suggests, a path that is relative to the current selected path.

10. What is a flag? Give three examples of flags you have used.
Flag is an option added after a command to control the outcome of the command. For example:
```
$ cp -r
$ rm -rf
$ ls -l
```

11. What do the ```r``` and ```f``` flags do with the ```rm``` command?
These flags are used to force delete a folder that is not empty.
