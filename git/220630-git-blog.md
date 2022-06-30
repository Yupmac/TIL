# gitignore

- 관리가 불필요한 파일 또는 폴더까지 git 에 의해 추적되지 않도록 작성하며, 해당 문서에 작성된 리스트는 수정사항이 발생해도 git이 무시하게 됨.    
- 직접 CLI shell을 통해 작성할 수 있으나, https://www.toptal.com/developers/gitignore 에서 간단하게 작업하여 문서에 붙여넣는 방법도 있음.  

---

# LICENSE

오픈 소스를 활요한 프로젝트를 진행할 때는 작업 시에도, 배포시에도 가장 신경써야 한다.  
잘못 쓰다가는 저작권 분쟁에 휘말릴 수 있다. 항상 주의하자.

<가장 많이 사용되는 License>  
- MIT License : 가장 자유롭게 사용 가능함.    
- Apache License 2.0 : 특허권 관련 내용 포함되어 있음.  
- GNU General Public License v3.0 : 해당 라이센스가 포함된 소스코드는 반드시 GPL을 따라야 함.  

단, 위의 라인세스를 포함하여 프리하다고 해서 공짜인 것은 아니니 주의하자.

---

# Github blog

github 저장소를 활용하여 정적인 사이트(static site) 호스팅이 가능하다.  
이 방식을 이용하여 github에서 블로그를 운영해보자.

vi 를 이용하여 일일히 소스코드를 작성할 수도 있지만, 관리에 있어 너무나 불편하고 비효율적이다.   
이를 보완하기 위해 다음과 같은 대표적인 gererator들이 존재한다.

- Jekyll: Ruby 기반
- Hugo: Golang 기반 
- Hexo: Node.js 기반 <----- recommand

난 대세를 따르기로 한다. Hexo 설치

---

# Hexo

본격적인 사용에 앞서 우선 몇 가지 환경설정 작업이 필요하다.

1. git 
2. node.js
  
위의 사용환경이 설치되었다면 이제 hexo를 설치하고 세팅하자.  
$ npm install -g hexo-cli  

### Init Hexo project  
  $ hexo init <folder>
  $ cd <folder>
  $ npm install  
### Clean && generate static files  
  $ hexo clean && hexo generate  
### Run hexo server  
  $ hexo server  
### Deploy  
  $ npm install hexo-deployer-git --save  

마지막으로 업로드 될 hexo 정보를 수정해줘야 하는데 작업할 때는 pakage.json 파일이 있는 경로에서 작업해준다.  
hexo 정보가 기록된 문서 파일에 다음 내용으로 수정해주면 모든 설정 끝.  

deploy:  
  type: git  
  repo: <repository url>    
  branch: [branch]  
  message: 

  

