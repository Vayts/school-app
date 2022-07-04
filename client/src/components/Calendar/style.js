import Calendar from 'react-calendar';
import styled from 'styled-components';

export const CalendarWrapper = styled.div`
	min-height: 380px;
`;

export const CalendarItem = styled(Calendar)`
  width: 100%;
  max-width: 100%;
  padding: 25px 10px;
  color: #222;
  line-height: 1.125em;
  border-radius: 16px;
  background: #FFFFFF;
  box-shadow: 0 0 20px rgba(132, 132, 132, 0.2);

  .react-calendar__navigation {
    margin-bottom: 15px;
    display: flex;

    .react-calendar__navigation__label__labelText.react-calendar__navigation__label__labelText--from {
      color: #4264DF;
      font-size: 18px;
      width: auto;
      user-select: none;

      button {
        &:active {
          background-color: transparent !important;
        }
      }
    }

    button {
      width: auto;
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        background-color: transparent !important;
      }

      &[disabled] {
        background-color: transparent !important;
      }

      &:active {
        background-color: transparent !important;
        transform: scale(1.1);
        outline: none;
      }
	    
	    &:focus {
		    background-color: transparent !important;
		    outline: none;
	    }
    }
  }

  .react-calendar__month-view__weekdays {
    margin-bottom: 20px;
  }

  .react-calendar__navigation button {
    color: #6f48eb;
    min-width: 44px;
    background: none;
    font-size: 16px;
    margin-top: 8px;
    border: none;
    text-align: center;
  }

  .react-calendar__tile {
    margin-bottom: 8px;

    &--active {
      abbr {
        background-color: #2D5BFF;
        color: #fff;

        &:hover {
          background-color: #2D5BFF !important;
          color: #fff !important;
        }
      }
    }
  }

  .react-calendar__month-view__weekdays__weekday {
    &:nth-child(6n) {
      color: #FF3030;
    }

    &:nth-child(7n) {
      color: #FF3030;
    }

  }

  .react-calendar__tile.react-calendar__month-view__days__day {

    abbr {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 30px;
      width: 30px;
      font-size: 14px;
      border-radius: 50%;

      &:hover {
        background-color: #ECF0FF;
        cursor: pointer;
      }
    }

  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: #8A8A8A;
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #f8f8fa;
  }

  .react-calendar__navigation button[disabled] {
    background-color: #f0f0f0;
  }

  .react-calendar__tile {
    border: none;
    background-color: transparent;
  }

  .react-calendar__month-view__weekdays__weekday {
    text-align: center;
  }

  abbr {
    text-decoration: none;
    cursor: default;
    user-select: none;
  }
`;
