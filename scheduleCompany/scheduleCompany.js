const $mainTableHeader = document.querySelector('.main__tableHeader');
const $btnAdd = document.querySelector('.main__btnAdd button');
const $modalBox1 = document.getElementById('modalBox1');
const $modalBox2 = document.getElementById('modalBox2');
const $modalBoxBtnYes1 = document.querySelector('#modalBox1 .btn.yes');
const $modalBoxBtnYes2 = document.querySelector('#modalBox2 .btn.yes');
const $modalBoxBtnNo1 = document.querySelector('#modalBox1 .btn.no');

/* 스케줄 작성 시 생성되는 HTML */
const htmlFormNew = `
                      <div class="main__tableBody new">
                      <div><i class="fa-regular fa-user"></i><input type="text" value="홍길동" style="padding: 0"><input type="text" value="아이디자리" style="padding: 0"></div>
                      <div>
                        <select name="" id="">
                          <option value="">- 선택 -</option>
                          <option value="">서빙</option>
                          <option value="">주방장 및 조리사</option>
                          <option value="">주방보조</option>
                          <option value="">바리스타</option>
                          <option value="">제과제빵사</option>
                          <option value="">바</option>
                          <option value="">매장관리 및 판매</option>
                          <option value="">사무보조</option>
                        </select>
                      </div>
                      <div>
                        <select class="days" name="" id="" multiple>
                          <option value="">월</option>
                          <option value="">화</option>
                          <option value="">수</option>
                          <option value="">목</option>
                          <option value="">금</option>
                          <option value="">토</option>
                          <option value="">일</option>
                        </select>
                      </div>
                      <div><span>출근<input type="time"></span><span>퇴근<input type="time"></span></div>
                      <div>
                      </div>
                      <div><input type="date"><input type="date"></div>
                      <div><button class="btnSet">등록</button></div>
                    </div>
`;
/* 스케줄 등록 시 생성되는 HTML */
const htmlFormSet = `
                      <div class="main__tableBody set">
                      <div><i class="fa-regular fa-user"></i><input type="text" value="홍길동" style="padding: 0" disabled><input type="text" value="아이디자리" style="padding: 0" disabled></div>
                      <div>
                        <select name="" id="" disabled>
                          <option value="">- 선택 -</option>
                          <option value="">서빙</option>
                          <option value="">주방장 및 조리사</option>
                          <option value="">주방보조</option>
                          <option value="">바리스타</option>
                          <option value="">제과제빵사</option>
                          <option value="">바</option>
                          <option value="">매장관리 및 판매</option>
                          <option value="">사무보조</option>
                        </select>
                      </div>
                      <div>
                        <select class="days" name="" id="" multiple disabled>
                          <option value="">월</option>
                          <option value="">화</option>
                          <option value="">수</option>
                          <option value="">목</option>
                          <option value="">금</option>
                          <option value="">토</option>
                          <option value="">일</option>
                        </select>
                      </div>
                      <div><span>출근<input type="time" disabled></span><span>퇴근<input type="time" disabled></span></div>
                      <div>
                        <input type="text" value="퇴근" disabled>
                      </div>
                      <div><input type="date" disabled><input type="date" disabled></div>
                      <div><button class="btnModify">수정</button><button class="btnDelete">삭제</button></div>
                      </div>
 `;
 const htmlFormModify = `
                      <div class="main__tableBody modify">
                      <div><i class="fa-regular fa-user"></i><input type="text" value="홍길동" style="padding: 0"><input type="text" value="아이디자리" style="padding: 0"></div>
                      <div>
                        <select name="" id="">
                          <option value="">- 선택 -</option>
                          <option value="">서빙</option>
                          <option value="">주방장 및 조리사</option>
                          <option value="">주방보조</option>
                          <option value="">바리스타</option>
                          <option value="">제과제빵사</option>
                          <option value="">바</option>
                          <option value="">매장관리 및 판매</option>
                          <option value="">사무보조</option>
                        </select>
                      </div>
                      <div>
                        <select class="days" name="" id="" multiple>
                          <option value="">월</option>
                          <option value="">화</option>
                          <option value="">수</option>
                          <option value="">목</option>
                          <option value="">금</option>
                          <option value="">토</option>
                          <option value="">일</option>
                        </select>
                      </div>
                      <div><span>출근<input type="time"></span><span>퇴근<input type="time"></span></div>
                      <div>
                      </div>
                      <div><input type="date"><input type="date"></div>
                      <div><button class="btnModifySet">수정</button></div>
                    </div>
`;

/* 스케줄 생성 함수*/
const newSchedule = () => {
  /* 이벤트 targeting */
  const $template = document.createElement('template');
  $template.innerHTML = htmlFormNew;
  const $mainTableBody = $template.content.firstElementChild;
  const $btnSet = $mainTableBody.querySelector('.btnSet')
  
 /* 스케줄 생성 기능 */
  $mainTableHeader.insertAdjacentElement("afterend", $mainTableBody); 
  /* 스케줄 반복 생성 방지-버튼 숨김 처리 */ 
  if($mainTableBody.classList.contains('new')) {
    $btnAdd.classList.toggle('hidden');
  }
  /* 등록버튼 클릭 시 모달창으로 스케줄 생성 유무 확인 처리 */
  $btnSet.addEventListener('click',()=>{
    $modalBox1.showModal();
    
    $modalBoxBtnYes1.addEventListener('click',()=>{
      /* 새로운 스케줄 폼이 set 상태인지 아닌지 체크*/
      if(!$mainTableBody.classList.contains('set')) {
        // const $template = document.createElement('template');
        // $template.innerHTML = htmlFormSet;
        /* 등록 상태의 스케줄 생성 */
        $mainTableBody.insertAdjacentHTML("afterend", htmlFormSet);
        /* 생성 상태의 스케줄 삭제 */
        $mainTableBody.remove();
        /* 숨김 처리된 스케줄 작성 버튼 활성화 */
        $btnAdd.classList.toggle('hidden');

        
        updateSchedule();
        deleteSchedule();
        
        return;
      } 
      
    });
  });
}
$btnAdd.addEventListener('click', newSchedule);

/* 스케줄 수정 함수*/
const updateSchedule = () => {
   // 수정기능
  const $btnModify = document.querySelector('.btnModify');
  
  $btnModify.addEventListener('click', (e)=>{
    e.target.closest('.main__tableBody.set').insertAdjacentHTML("beforebegin", htmlFormModify);
    e.target.closest('.main__tableBody.set').remove();
    const $btnModifySet = document.querySelector('.btnModifySet');
    $btnModifySet.addEventListener('click', (e)=>{
      e.target.closest('.main__tableBody.modify').insertAdjacentHTML("beforebegin", htmlFormSet);
      e.target.closest('.main__tableBody.modify').remove();
    });
  });
}

/* 스케줄 삭제 함수*/
const deleteSchedule = () => {
  const $btnDelete = document.querySelector('.btnDelete');
  //삭제 기능
  $btnDelete.addEventListener('click', (e)=>{
    $modalBox2.showModal();
    $modalBoxBtnYes2.addEventListener('click',()=>{
      e.target.closest('.main__tableBody.set').remove();
    });
  });
}