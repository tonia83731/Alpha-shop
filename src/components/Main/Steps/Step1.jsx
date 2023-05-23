import { isDisabled } from "@testing-library/user-event/dist/utils"



const genderOptions= [
  {
    id: 1,
    value: "mr",
    name: "先生"
  },
  {
    id: 2,
    value: "ms",
    name: "女士"
  },
  {
    id: 3,
    value: "mx",
    name: "不明"
  },
]

const locationOptions = [
  {
    id: 0,
    value: "",
    name: "請選擇縣市",
    isDisabled: true,
  },
  {
    id: 1,
    value: "KLU",
    name: "基隆市"
  },
  {
    id: 2,
    value: "TPH",
    name: "新北市"
  },
  {
    id: 3,
    value: "TPE",
    name: "臺北市"
  },
  {
    id: 4,
    value: "TYC",
    name: "桃園市"
  },
  {
    id: 5,
    value: "HSH",
    name: "新竹縣"
  },
  {
    id: 6,
    value: "HSC",
    name: "新竹市"
  },
  {
    id: 7,
    value: "MAC",
    name: "苗栗市"
  },
  {
    id: 8,
    value: "MAL",
    name: "苗栗縣"
  },
  {
    id: 9,
    value: "TXG",
    name: "臺中市"
  },
  {
    id: 10,
    value: "CWH",
    name: "彰化縣"
  },
  {
    id: 11,
    value: "CWS",
    name: "彰化市"
  },
  {
    id: 12,
    value: "NTC",
    name: "南投市"
  },
  {
    id: 13,
    value: "NTO",
    name: "南投縣"
  },
  {
    id: 14,
    value: "YLH",
    name: "雲林縣"
  },
  {
    id: 15,
    value: "CHY",
    name: "嘉義縣"
  },
  {
    id: 16,
    value: "CYI",
    name: "嘉義市"
  },
  {
    id: 17,
    value: "TNN",
    name: "臺南市"
  },
  {
    id: 18,
    value: "KHH",
    name: "高雄市"
  },
  {
    id: 19,
    value: "IUH",
    name: "屏東縣"
  },
  {
    id: 20,
    value: "PTS",
    name: "屏東市"
  },
  {
    id: 21,
    value: "ILN",
    name: "宜蘭縣"
  },
  {
    id: 22,
    value: "ILC",
    name: "宜蘭市"
  },
  {
    id: 23,
    value: "HWA",
    name: "花蓮縣"
  },
  {
    id: 24,
    value: "HWC",
    name: "花蓮市"
  },
  {
    id: 25,
    value: "TTC",
    name: "臺東市"
  },
  {
    id: 26,
    value: "TTT",
    name: "臺東市"
  },
  {
    id: 27,
    value: "PEH",
    name: "澎湖縣"
  },
  {
    id: 28,
    value: "KMN",
    name: "金門縣"
  },
  {
    id: 29,
    value: "LNN",
    name: "連江縣"
  },
]



export function ShortResponse({name, type, placeholder, data, onChange}){
  return(
    <>
      <div className="input-label">{name}</div>
      <input type={type} placeholder={placeholder} data-name={data} onChange={onChange}/>
    </>
  )
}

export function OptionResponse({name, defaultValue, options}){
  return(
    <select name={name} defaultValue={defaultValue}>
      {options.map((option) => {
        return(
          <option key={option.id} value={option.value} disabled={option.isDisabled}>{option.name}</option>
        )
      })}
    </select>
  )
}

export default function StepOne(){
  return(
    <form className="col col-12" data-phase="address">
      <h3 className="form-title">寄送地址</h3>
      <section className="form-body col col-12">
        <div className="col col-12 input-col-12-1">
          <div className="input-group input-w-lg-2 input-w-sm-s1">
            <div className="input-label">稱謂</div>
            <div className="select-container">
              <OptionResponse name="selectedGender" defaultValue="mr" options={genderOptions}/>
            </div>
          </div>
          <div className="input-group input-w-lg-4 input-w-sm-s2">
            <ShortResponse name="姓名" type="text" placeholder="請輸入姓名"/>
          </div>
        </div>
        <div className="col col-12 input-col-12-2">
          <div className="input-group input-w-lg-3 input-w-sm-full phone">
            <ShortResponse classList="input-group input-w-lg-3 input-w-sm-full" name="電話" type="tel" placeholder="請輸入行動電話"/>
          </div>
          <div className="input-group input-w-lg-3 input-w-sm-full email">
            <ShortResponse classList="input-group input-w-lg-3 input-w-sm-full" name="Email" type="email" placeholder="請輸入電子郵件"/>
          </div>
        </div>
        <div className="col col-12 input-col-12-3">
          <div className="input-group input-w-lg-2 input-w-sm-full">
            <div className="input-label">縣市</div>
            <div className="select-container">
              <OptionResponse name="selectedLocation" defaultValue="" options={locationOptions} isOptionDisabled={(option) => option.isDisabled}/>
            </div>
          </div>
          <div className="input-group input-w-lg-4 input-w-sm-full">
            <ShortResponse classList="input-group input-w-lg-4 input-w-sm-full" name="地址" type="text" placeholder="請輸入地址"/>
          </div>
        </div>
      </section>
    </form>
  )
}