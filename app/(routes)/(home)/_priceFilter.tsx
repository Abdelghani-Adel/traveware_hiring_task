import { useState } from "react";

//@ts-ignore
import RangeSlider from "react-range-slider-input";

const PriceFilter = (props: IProps) => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(40);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(40);

  const onChangeHandler = (range: [number, number]) => {
    setFrom(range[0]);
    setTo(range[1]);
    props.onPriceChange(range[0], range[1]);
  };

  return (
    <>
      <div className="row">
        <div className="col">
          <div className="form-group">
            <input type="number" className="form-control" readOnly value={from} />
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <input type="number" className="form-control" readOnly value={to} />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <RangeSlider
            min={min}
            max={max}
            step={1}
            defaultValue={[60, 200]}
            value={[from, to]}
            onInput={onChangeHandler}
          />
        </div>
      </div>
    </>
  );
};

export default PriceFilter;

type IProps = {
  onPriceChange: (minPrice: number, maxPrice: number) => void;
};
