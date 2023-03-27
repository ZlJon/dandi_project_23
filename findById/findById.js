//이벤트 타겟 설정
const $subTitle1 = document.querySelector('.main__subTitle a:nth-child(1)');
const $subTitle2 = document.querySelector('.main__subTitle a:nth-child(2)');
const $personMember = document.querySelector('.main__personMember');
const $companyMember = document.querySelector('.main__companyMember');

//토글 기능 -> 개인회원으로 전환하는 로직
const changPersonMember = () => {
  if($personMember.classList.contains('active')) {
    $personMember.classList.toggle('active');
    $companyMember.classList.toggle('active');
  } 
  if ($subTitle1.classList.contains('active')) {
    $subTitle2.classList.toggle('active');
    $subTitle1.classList.toggle('active');
  }
};
//이벤트 리스너 설정
$subTitle1.addEventListener('click', changPersonMember);

//토글 기능 -> 기업회원으로 전환하는 로직
const changCompanyMember = () => {
  if(!$companyMember.classList.contains('active')) {
    $companyMember.classList.toggle('active');
    $personMember.classList.toggle('active');
    $subTitle2.classList.toggle('active');
    $subTitle1.classList.toggle('active');
  }
  if (!$subTitle2.classList.contains('active')) {
    $subTitle2.classList.toggle('active');
    $subTitle1.classList.toggle('active');
  }
};
//이벤트 리스너 설정
$subTitle2.addEventListener('click', changCompanyMember);


//모달창
const $modalBox = document.getElementById('modalBox');
const $chkPersonMember = document.querySelector('#main .main__personMember form button');
const $chkCompanyMember = document.querySelector('#main .main__companyMember form button');

$chkPersonMember.addEventListener('click', () => {
  $modalBox.showModal();
});

$chkCompanyMember.addEventListener('click', () => {
  $modalBox.showModal();
});