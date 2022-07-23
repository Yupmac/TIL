<!--  버전관리(VCS) -->

# 개행 문자(Newline) 설정
## macOS
$ git config --global core.autocrlf input
## Windows
$ git config --global core.autocrlf true

# 사용자 정보
## 커밋(버전 생성)을 위한 정보 등록
$ git config --global user.name 'YOUR_NAME'
$ git config --global user.email 'YOUR_EMAIL'

# 구성 확인
## Q키를 눌러서 종료!
$ git config --global --list

$ git init
# 현재 프로젝트에서 변경사항 추적(버전 관리)을 시작.

$ git add index.html
# 변경사항을 추적할 특정 파일(index.html)을 지정.

$ git add .
# 모든 파일의 변경사항을 추적하도록 지정.

$ git commit -m '프로젝트 생성'
# 메시지(-m)와 함께 버전을 생성.

$ git remote add origin https://github.c...
# origin이란 별칭으로 원격 저장소를 연결.

$ git push origin master
# origin이란 별칭의 원격 저장소로 버전 내역 전송.

$ git remote rm origin
# 기존 remoted의 origin을 삭제.

---------

<!-- 브랜치(Branch) 생성 및 관리 -->

$ git branch
# 현재 사용중인 branch 종류 확인

$ git branch -a
# 원격 저장된 branch 포함, 모든 종류의 branch 확인

$ git branch 이름
# 새로운 이름의 brnach 생성

$ git checkout 이름
# 해당 이름의 branch로 전환
