# GIT branch를 활용한 관리법과 git-flow 활용에 대해 알자!

---

### Branch   
-> 분기점을 생성하여 독립적으로 코드를 변경할 수 있도록 도와주는 모델

```
Show available local branch
$ git branch
Show available remote branch
$ git branch -r
Show available All branch
$ git branch -a
```

위 방법으로 현재 생성되어 있는 브랜치 및 리모트 되어 있는 브랜치를 확인한다.

```
Create branch
$ git branch stem

Checkout branch
$ git checkout stem(최신버전에서는 checkout 대신 switch 를 사용한다.)

Create & Checkout branch
$ git checkout -b new-stem

make changes inside readme.md
$ git commit -a -m 'edit readme.md'
$ git checkout master(최근에는 master 대신 main을 사용한다.)

merge branch
$ git merge stem
```

새 브랜치를 만든 후 해당 브랜치로 이동하여 작업을 하고 메인 브랜치에 병합시키는 과정을 거친다.

```
delete branch
$ git branch -D stem

push with specified remote branch
$ git push origin stem

see the difference between two branches
$ git diff master stem
```
메인 브랜치로 병합한 후 필요 없어진 브랜치는 삭제한다.

---

## branching models

 - git flow
  - (hotfix) - master - (release) - develop - feature
  - pros: 가장 많이 적용, 각 단계가 명확히 구분됨
  - cons: 다소 과정이 복잡할 수 있다.

해당 flow를 주로 사용하기에 다른 방식은 알아보지 않는다. ㅋㅋ

---

## 추가적인 git commands

- rename
```
$ git mv server.py main.py
```
파일의 history를 남기기 위해 삭제 후 재생성하는 것이 아니라 파일 이름을 바꿔주는 방식으로 기록한다.

- undoing
```
$ git checkout -- . 
```
or 
```
git checkout -- {filename}
```
단, 작업의 실수를 줄이기 위해 파일 이름을 직접 명시해서 작업하는 것을 추천!

- Unstaging
```
$ git reset HEAD {filename}
```

- Unstaging and Remove
```
$ git rm -f {filename}
```

- Edit latest commit
```
$ git commit --amend
```

- Edit prior commit
```
$ git rebase -i <commit>
```

- abort rebase
```
$ git rebase --abort
```

Complete rebase
```
$ git rebase --continue
```

---

ex) 현재 HEAD에서 직전의 3개의 commit을 순서대로 거슬러 올라가 해당 내역에 대해
commit, push 수행
```
$ git revert --no-commit HEAD~3..
$ git commit
$ git push origin <branch>
```
- 잘못하기 전 과거로 돌아가 최신을 유지하면서 되돌렸다는 이력을 commit으로 남겨 모든 팀원이 이 사항을 공유하고 주지시킬 수 있음.  
- commit을 따로 안할땐 --no-edit  
- merge commit을 되돌릴 땐 -m ( $git revert -m {1 or 2} {merge commit id} )  

협업은 필수불가결하기 때문에 연습할 때부터 Revert 하는 방식으로 습관을 들이자!

---

## Fork and Merge

실제 협업 과정에서 진행되는 work flow를 이해해보자.

우선 팀장 또는 프로젝트 관리자에 의해 새 브랜치가 만들어지고 배정받게 될 것이다. 그럼 배정받은 링크를 클론한 후 내 로컬 저장소에 따로 브랜치 작업을 진행한다. 모든 작업이 완료되면 commit 하는 과정을 반복한다.

```
$ git clone https://github.com/username/forked-repo.git

$ git branch -a
$ git checkout -b new-feature
```

Make some change
```
$ git add file
$ git commit -m "commit message"
$ git push origin new-feature
```


