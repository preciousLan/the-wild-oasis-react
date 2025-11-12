import styled from 'styled-components';
import Form from '../../ui/Form';
import Input from '../../ui/Input';
import { useSettings } from './useSetting';
import Spinner from '../../ui/Spinner';
import { useUpdateSetting } from './UseUpdateSetting';

function UpdateSettingsForm() {
  const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;


  const { isLoading, settings:
    { minBookingLength,
      maxBookingLength,
      maxGuestPerBooking,
      breakfastPrice } = {}
  } = useSettings()

  const { isUpdating, updateSetting } = useUpdateSetting()

  if (isLoading) return <Spinner />

  function handleUpdate(e, field) {
    const value = e.target.value
    if (!value) return;
    updateSetting({ [field]: value })
  }


  return (
    <div>
      <FormRow>
        <label htmlFor="min-nights">Minimum nights/booking</label>
        <Input
          type="number"
          id="min-nights"
          defaultValue={minBookingLength}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "minBookingLength")}
        />
      </FormRow>

      <FormRow>
        <label htmlFor="max-nights">Maximum nights/booking</label>
        <Input
          type="number"
          id="max-nights"
          defaultValue={maxBookingLength}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "maxBookingLength")}
        />      </FormRow>

      <FormRow>
        <label htmlFor="max-guests">Maximum guests/booking</label>
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuestPerBooking}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "maxGuestsPerBooking")}
        />      </FormRow>

      <FormRow>
        <label htmlFor="breakfast-price">Breakfast price</label>
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "breakfastPrice")}
        />      </FormRow>

    </div>
  );
}

export default UpdateSettingsForm;
