const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<ShowAllPosts />} />
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/edit-post/:id' element={<EditPost />} />
          <Route path='/show-post/:id' element={<ShowSpecificPost />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
