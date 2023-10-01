import styled from "styled-components";
import { DatePicker } from "react-responsive-calendar-picker";
import { DateRangePicker } from "react-date-range";

export const DatePickerCustomTwo = styled(DatePicker)`
  position: relative;
  .date-picker-wrapper {
    margin-top: 16px;
    right: 0;
    z-index: 999;
    @media (max-width: 991px) {
      width: 100% !important;
    }

    @media (max-width: 564px) {
      flex-wrap: wrap;
    }

    div:nth-child(2) {
      div {
        font-size: 16px;
      }
    }

    .day-date {
      font-size: 14px;
    }
  }
`;

export const DateRangePickerCustom = styled(DateRangePicker)`
  display: flex !important;
  .rdrCalendarWrapper {
    position: absolute;
    right: 0;
    max-width: 700px;
    min-width: 100%;
    margin-top: 16px;
    border-radius: 1rem !important;
    padding: 0 30px !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05);
    border: 1px solid #dedede;
    z-index: 998;
    @media (max-width: 991px) {
      width: 100% !important;
    }
    .rdrMonths {
      @media (max-width: 564px) {
        flex-wrap: wrap;
      }
    }
  }
  .rdrDefinedRangesWrapper {
    display: none;
  }

  .rdrDateDisplayWrapper {
    display: none;
  }
`;
