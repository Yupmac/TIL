# Github 활용한 협업 work-flow 이해하기

### <팀장의 역할>
1. 팀장 또는 프로젝트 관리자는 먼저 new organizations 생성한다.
 - tip:  Contact email이란 향후 공지사항 등의 내용을 전달할 발송 주소이다.

2. new repository 생성

4. develop branch 생성
    - 3번 단계에서 생성한 url을 복사한 뒤 terminal(git bash) 에서 복제한다. -> git clone 'url'
    - 해당 폴더로 접속한 뒤 작업할 브랜치를 생성한다. -> git branch develop -> git switch develop -> git push -u origin develop

5. 프로젝트에 참여시킬 팀원들을 초대한다.
 - organizations -> people -> members -> invite members

6. new projects(Scrum board) 생성
 - 일종의 화이트보드 같은 역할을 한다. 진행상황을 한 눈에 볼 수 있다.
 - tip:  Automated kanban with reviews(팀장과 팀원이 함께 코드 리뷰 가능)

7. 팀원이 제출한 Issue 카드 확인한 후 배정
 - 최대 10명까지 동시에 배정시킬 수 있다.
 - labels 를 통해 직관적으로 어떤 작업을 하는지 표시해둘 수 있다.
 - 이후 팀원 진행상황에 맞춰 scrum board 에서 진행상황 업데이트

8. 팀원의 pull request 를 확인
 - 필요시 코드 리뷰 및 피드백하여 작업물 완성도 높이기

9. 최종 확인된 내용으로 Merging pull request 한다.

---

### <팀원>

1. 관리자로부터 초대받은 이메일 주소를 통해 프로젝트에 참여한다.
 - 자신이 하고자 하는 작업에 대해 Issues 를 통해 간단 명료하게 작성하여 보고한다.
 ex) ## Description
        index 페이지의 nav 부분을 만들겠습니다.
     ## Tasks
        - icons
        - img 
        - html 
        - css

 - 관리자로부터 배정받은 업무를 확인한다.

2. 팀 repo 에 최신 업로드되어 있는 파일을 clone 한다.
 - Fork -> Creat a new fork -> clone 'url' -> 이후부터는 terminal 에서 작업 -> git clone 'url' -> 복사하여 생성된 폴더로 진입 -> git branch develop -> git switch develop -> git flow init -> git flow feature start '폴더이름' -> 작업 진행
 - [작업 완료 후] git commit 까지 진행 -> git flow feature finish '폴더이름' -> git push -u origin develop(첫 생성시에만 -u를 사용하고 그 이후부터는 없이 입력한다.)

 위 작업까지 진행하면 나의 github develop 브랜치에 업로드가 됨. 이제 내 브랜치에서 팀 프로젝트 브랜치로 옮겨주는 작업이 필요함.

 Pull requests -> 나의 repo: develop로 설정/팀repo: develop 로 양 주소 모두 develop으로 설정! -> 간단하게 완료한 내용 적은 뒤 create pull request -> 이후 피드백 등을 반영하여 위 과정을 반복하여 작업물을 완성한다.

 - tip: commit 은 자주하여 주기적으로 관리자에게 본인이 작업중임을 알려준다. - tip2: 여러 사람이 지속적으로 업데이트를 하기 때문에 중간 중간 최신 업데이트 사항을 pull 하여 conflict 확률을 줄여준다.   
  git remote -> git remote -v -> git remote add '별명' '팀repo url' -> git remote -v -> git pull '별명' develop


 
