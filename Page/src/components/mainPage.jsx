import React from 'react'
import '../css/mainPageCss.css'

const mainPage = () => {
  return (
    <div className="school-notice">
    <h2 className="school-notice__title">학교 알림장</h2>
    <div className="school-notice__content">
      <div className="school-notice__item">
        <h3 className="school-notice__item-title">교육 일정 변경</h3>
        <p className="school-notice__item-description">
          내일부터 3일간 교육 일정이 변경되어 수업 시간표가 조정되었습니다. 자세한 내용은 첨부된 파일을 확인해주세요.
        </p>
      </div>
      <div className="school-notice__item">
        <h3 className="school-notice__item-title">학교 종업식 안내</h3>
        <p className="school-notice__item-description">
          학교 종업식은 다음 주 금요일 오후 2시에 학교 체육관에서 열릴 예정입니다. 모든 학생들은 참석해주셔야 합니다.
        </p>
      </div>
      <div className="school-notice__item">
        <h3 className="school-notice__item-title">도서관 이용 안내</h3>
        <p className="school-notice__item-description">
          도서관은 8월 중순부터 장기간 리모델링 공사로 인해 폐쇄됩니다. 도서 대출과 반납은 공사 전에 마무리해주세요.
        </p>
      </div>
    </div>
  </div>

  )
}

export default mainPage