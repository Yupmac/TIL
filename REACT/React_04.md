const Post = ({ list }) => {
  const params = useParams();
  return (
    <>
      id: {params.id}
      <br />
      글내용: {list[params.id]}
      <br />
      <Link to='/hello'>return to write</Link>
    </>
  );
}

const Hello = ({ list, setList }) => {
  const [value, setValue] = useState('');
  const handleChange =(e) => {
    setValue(e.target.value);
  }
  const handleClick = () =>{
    setList(list.concat([value]));
    setValue('');
  }

  return (
    <>
      글쓰기 화면<br />
      <input value={value} type='text' onChange={handleChange}/>
      <button onClick={handleClick}>등록</button>
      {list.map((item, i) => (
        <Link  key={i} to={`/post/${i}`}>
          <div>
            {item}
          </div>
        </Link>
      ))}
    </>
  );
}

const App = () => {
  const [list, setList] = useState([]);
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Form />} />

        <Route path="/hello" element={<Hello list={list} setList={setList} />} />
        <Route path="/post/:id" element={<Post list={list} />} />
      </Routes>
    </BrowserRouter>
  );
}
