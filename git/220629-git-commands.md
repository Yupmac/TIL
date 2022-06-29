# 220629 TIL

시작에 앞서.....
-> 논리적 사고가 중요하다. 답 없는 모호한 주제라도 최대한 근거를 통해 논리적인 답을 도출해보도록 노력해보자.

-----

원활한 작업을 위해 GUI shell 보다는 CLI shell 을 사용하도록 하자.
대표적인 CLI shell인 zsh
난 mac os니까 이미 설치된 터미널을 활용하도록 하자.

-----

<git 이 뭐지?>
버전 관리를 위한 시스템

git 와 github 는 다르다!
=> github 는 git 활용을 도와주는 클라우드 웹서비스이다.

----

<GIT 을 사용하는데 있어 필수로 알아야 할 명령어들(쉘 커맨드)>
* 띄어쓰기는 각 파일 또는 디렉토리간 구별을 의미함

Pwd(print working directory) - 절대 경로를 알려주는 명령어
로그인한 유저가 별도의 권한 없이 사용할 수 있는 경로
Ls - list segment
Cd - change directory
Mkdir - make directory 
Touch - new file 파일 생성
Mv - move 파일 이동
.. - 상위 디렉토리
. - 하위 디렉토리
Cp - copy
cp style.css ./nav-bar.css 같은 폴더에 복사(파일 충돌을 피하기 위해 다른 이름으로 적어야 함)
cp style.css bin 다른 폴더에 복사
mv hello.js ./main.js 파일 이름 변경
Rm - remove 파일 삭제(논리적 삭제)
rm -rf bin 강제적으로 해당 디렉토리 삭제
Cat - 문서 내용 확인

------

<vi commands>

Vi 파일명 - 해당 에디터로 해당 파일 실행
Normal mode - 입력하는 모든 알파벳이 명령어로 작동함
Insert mode - 명령어가 아닌 알파벳으로 입력됨
노멀모드에서 shift + : 누르면 맨 아래줄 왼쪽으로 커서 옮겨짐
:set nu - Line number
:q! - quit with override last changes
:wq - write and quit

------

본격적으로 git 을 설치하고 시작해보자!
Before Start

git 설치 확인( $ git -v )
git 환경설정

$ git config --global user.name "당신의유저네임"
$ git config --global user.email "당신의메일주소"
$ git config --global core.editor "vim"
$ git config --global core.pager "cat"

lg alias 설정: johanmeiring/gist:3002458
$ git config --list 로 정상 설정 확인
수정이 필요할 경우, $ vi ~/.gitconfig 에서 수정 가능

-----

<commit 할 때 기억해야 할 것>

commit은 동작 가능한 최소단위로 자주 할 것.
해당 작업단위에 수행된 모든 파일 변화가 해당 commit에 포함되어야 함.
모두가 이해할 수 있는 log를 작성할 것.
Open Source Contribution시 영어가 강제되지만, 그렇지 않을 경우 팀 내 사용 언어를
따라 쓸 것.
제목은 축약하여 쓰되(50자 이내), 내용은 문장형으로 작성하여 추가설명 할 것.
제목과 내용은 한 줄 띄워 분리할 것.
내용은 이 commit의 구성과 의도를 충실히 작성할 것.

-----

