import { useState } from "react";
import DatePicker from "react-mobile-datepicker";

import { IcDownArrow } from "../../../../asset/icon";
import { JOIN_PROFILE_ALERT_KEY } from "../../../../core/join/userProfileErrorMessage";
import { St } from "./style";

interface ProfileBirthProps {
  birthData: string;
  isInComplete: boolean;
  setBirthData: (birthDay: string) => void;
  handleErrorMsg: (err: string) => void;
}

export default function ProfileBirth(props: ProfileBirthProps) {
  const { birthData, isInComplete, setBirthData, handleErrorMsg } = props;
  const [isOpen, setIsOpen] = useState(false);
  const time = new Date();

  const dateFormat = (defaultTime: typeof time) => {
    const year = defaultTime.getFullYear();
    const month = defaultTime.getMonth() + 1;
    const day = defaultTime.getDate();
    const monthResult = month < 10 ? "0" + month : month;
    const dayResult = day < 10 ? "0" + day : day;

    let age = time.getFullYear() - year;
    time.getMonth() + 1 <= month && time.getDate() <= day ? age-- : null;

    if (year === time.getFullYear() && monthResult >= time.getMonth() + 1 && day >= time.getDate()) {
      handleErrorMsg(JOIN_PROFILE_ALERT_KEY.birth.valid);
    } else if (year > time.getFullYear()) {
      handleErrorMsg(JOIN_PROFILE_ALERT_KEY.birth.valid);
    } else if (age < 14) {
      handleErrorMsg(JOIN_PROFILE_ALERT_KEY.birth.check);
    } else {
      handleErrorMsg(JOIN_PROFILE_ALERT_KEY.Okay);
    }
    return year + "년 " + monthResult + "월 " + dayResult + "일";
  };

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleSelect = (nextTime: typeof time) => {
    const getTime = dateFormat(nextTime);
    setBirthData(getTime);
    setIsOpen(false);
  };

  return (
    <St.ProfileBirth>
      <St.InputContainer onClick={handleClick}>
        <St.BirthInputForm
          type="text"
          placeholder="생년월일을 선택해주세요"
          value={birthData}
          birthData={birthData}
          isInComplete={isInComplete}
          readOnly
        />
        <St.Down>
          <IcDownArrow />
        </St.Down>
      </St.InputContainer>
      {isOpen && (
        <St.PickerContainer>
          <DatePicker
            value={time}
            isOpen={isOpen}
            onSelect={handleSelect}
            onCancel={handleCancel}
            isPopup={false}
            showHeader={false}
            dateFormat={["YYYY", "MM", "DD"]}
            theme="ios"
            confirmText="OK"
            cancelText="Cancle"
          />
        </St.PickerContainer>
      )}
    </St.ProfileBirth>
  );
}
