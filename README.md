# NextJS Introduction

NextJS 12 버전으로 프로젝트 setting

## Install

```bash
npx create-next-app@latest
npm install next@12.0.7 react@17.0.2 react-dom@17.0.2
```

### Library & Framework

- Library : 라이브러리를 가져와서 user가 결정권한을 갖고 사용하는 것
- framework : user의 코드를 불러와서 모든 걸 동작하게 하는 것 (특정한 규칙을 따라야 한다.)

### UI Rendering

function 네이밍 보다 **export default**를 붙이는 것이 가장 중요하다.
pages/about.js

```bash
export default function Potato() {
  return <>About</>;
}
```

### Pre-Rendering

- create-next-app : Server Side Rendering
  - 실제 HTML 코드를 확인할 수가 있다.
  - 페이지를 미리 렌더링하여 화면에 출력하는 것
  - react.js를 Backend에서 미리 동작시켜 페이지를 미리 생성하고, Component들을 HTML로 렌더링 한다.
  - SEO 검색엔진최적화 가능
- create-react-app : Client Side Rendering
  - 유저가 보는 UI를 만드는 것을 의미
  - <div id='root'/> 외에는 다른 HTML 코드를 볼 수가 없다.
  - 브라우저가 자바스크립트를 가져와서 클라이언트 사이드 자바스크립트를 만들어주는 모든 UI를 보여주는 것
  - 즉, 브라우저가 HTML을 가져올 때 비어있는 div로 가져온다는 것을 의미

### Routing

- react.js 처럼 Routing 관련 설정이 필요가 없다.
- anchore 태그를 사용하는 대신 <Link /> 를 사용해야 한다.
  - <Link /> : 단지 href만 설정할 수가 있다.

```bash
const router = useRouter(); // next.js에서 기본적으로 제공해주는 훅
```

### Styles jsx

global은 선택값

```bash
<style jsx global>
  {`
    a {
      color: blue;
    }
  `}
</style>
```

### Head

next.js에서 제공해주는 head 패키지
`import Head from "next/head";`

### API

API Key 숨기는 방법

[next.config.js]

- rewrites() 사용

```bash
const API_KEY = "10923b261ba94d897ac6b81148314a3f";

async rewrites() {
  return [
    {
      source: "/api/movies",
      destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
    },
  ];
},
```

- redirects() : /contact 페이지 접속 시 /form 페이지로 redirect 시키는 방법

```bash
async redirects() {
  return [
    {
      source: "/contact",
      destination: "/form",
      permanent: false,
    },
  ];
},
```

- :path\* 의 정보는 catch!

```bash
async redirects() {
  return [
    {
      source: "/contact/:path*",
      destination: "/form/:path*",
      permanent: false,
    },
  ];
},
```

2. 환경변수 .env로 API_KEY 관리하기
   2-1. 프로젝트 최상위에 .env 파일 만들어서 API_KEY 정보 등록하기
   `API_KEY = 10923b261ba94d897ac6b81148314a3f`

   2-2. next.config.js에 아래와 같이 작성

```bash
const API_KEY = process.env.API_KEY; // .env 파일에 API_KEY 정보 제공

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/contact/:path*",
        destination: "/form/:path*",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};

```

### getServerSideProps()

- 백엔드에서 동작한다.
- 모든 데이터가 준비가 완료되었을 때, 사용자에게 페이지가 보여진다. (서버사이드렌더링)
- fetch를 통해 데이터베이스를 불러온다.

```bash
export async function getServerSideProps() {
  // 데이터 fetch
  const response = await fetch(`http://localhost:3001/api/movies`);
  const { results } = await response.json();

  return {
    props: {
      results,
    },
  };
}
```

### Dynamic Routes

next에서 제공해주는 `useRouter()` 사용하거나 <Link /> 사용 가능

- 컴포넌트 내부에 있는 useRouter() 는 클라이언트 사이드에서만 실행이 된다.
- SEO 최적화하고, user가 접속하기 전에 pre-render를 하고 싶다면, getServerSideProps을 활용하면 된다.

### 404 page

- pages 폴더 안에 404.js 파일 만들어주면, next.js가 자동으로 파일을 불러온다.
