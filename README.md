# Hyperledger-study-20

하이퍼레져 앱 만들기 실습 20일차 - 상단 메뉴바 만들기

1. 19일차 예제 사용

2. App.js에 classname 지정

        <div className="menu"> 
                  <Nav 
                    onChangePage={function(id){
                    this.setState({
                      mode:'read',
                      selected_content_id:Number(id)
                    });
                  }.bind(this)}
                  data={this.state.contents}
                  ></Nav>
               <Control onChangeMode={function(_mode){
                 if(_mode === 'delete'){
                  if(window.confirm('really?')){
                      var _contents = Array.from(this.state.contents);
                      var i = 0;
                      while(i < _contents.length){
                        if(_contents[i].id === this.state.selected_content_id){
                          _contents.splice(i, 1);
                          break;
                        }
                        i = i + 1;
                      }
                      this.setState({
                        mode:'welcome',
                        contents:_contents
                      });
                      alert('deleted!');
                  }
                 } else {
                 this.setState({
                   mode:_mode
                 })
                }
               }.bind(this)}></Control>
               </div>

3. li에 class 지정

         # class="menuLink"

4. App.css 수정

        .menu{
            height: 40px;
            width: 1000px;
            margin-left: auto;
            margin-right: auto;
        }

        .menu ul li {
            list-style: none;
            color: #4f4f4f;
            background-color: white;
            float: left;
            line-height: 35px;
            vertical-align: middle;
            text-align: center;
        }

        .menuLink {
            text-decoration: none;
            color: #4f4f4f;
            display: block;
            width: 150px;
            font-size: 13px;
            font-weight: bold;
            font-family: verdana;
        }

        .menuLink:hover{
            color: white;
            background-color: #4f4f4f;
        }
