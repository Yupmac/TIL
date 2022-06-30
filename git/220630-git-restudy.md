# git 이 뭘까?

분산 버전 관리(DVC, DIstributed Version Control). 
이동, 추가, 수정 등 여러 변경점으로 인한 각 버전들을 효율적으로 관리하기 위해 탄생한 시스템.  
여러 사람이 함께 작업하는 특성상 굉장히 많은 파일이 생성될 수 있다. 그렇기에 분산적으로 버전을 관리할 수 있는 git 시스템은 현대 개발 시스템에서 필수 불가결하다.

git 와 github 는 다른걸까?  

- 엄연히 다르다.
git은 분산 버전 관리 시스템 자체를 뜻하며, github는 해당 시스템을 클라우드 상에서  관리할 수 있도록 도와주는 웹서비스이다.

-------

git 관리할 때 사용할 수 있는 shell 은 GUI 또는 SLI 방식 두가지가 있음.  
하지만 상대적으로 호환성 및 안정성 면에서 탁월한 SLI 방식으로 관리하는 것을 권장함.  
인터넷 연결이 되어 있지 않은 환경, 거의 모든 UNIX 환경에서 사용할 수 있다는 것이 큰 장점이다.  

kernel - 하드웨어와 응용프로그램을 연결시켜주는 핵심 시스템 소프트웨어. 
shell - 운영체제의 커널과 사용자를 이어주는 소프트웨어. 

shell 종류 중에는 zsh 가 가장 흔히 사용되며, windows에서는 bash, mac os 에서는 terminal 을 통해 사용할 수 있다.
 
--------

Shell Command  

cd Documents/  
mkdir dev  
cd ..  
pwd  

touch readme.md  
mv readme.md bin/  
cp readme.md bin/  
mv readme.md ./README.txt  
rm README.txt  

rm -rf bin/  
chmod 750 readme.md  
cat readme.md  
vi readme.md  

---------

vim?

- 리눅스(LINUX) 에서 활용 가능한 CLI 방식의 툴로써 거의 모든 UNIX 환경에서 사용할 수 있다.

-----

Recap - Vim command  

h j k l - left, down, up, right  
i - insert mode  
v - visual mode   
ESC - back to normal mode  
d - delete  
dd - delete a line  
y - yank  
yy - yank a line  
p - paste  
u - undo  
a - append  
A - append from end of line  
o - open line(under)  
O - open line(upper)  
H - move to the top of the screen  
L - move to the bottom of the screen  

------

command mode  

:q - quit  
:q! - quit discarding all changes  
:w - write  
:wq - write and quit  
:{number} - jump to {number}th line.

--------

git flow  

1. make some change on README.md  
2. git add .  
3. git commit  
4. git push origin main  



