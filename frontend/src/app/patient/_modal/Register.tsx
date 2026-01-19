'use client'
import Modal from "@/components/Modal/primary";
import { Address, Birth, Patient } from "@/types/patient";
import { JSX, useState } from "react";
import { isFormEmpty } from "../action";
import Input from "@/components/Input/Primary";

interface Child {
    close: () => void
}

interface Input {
  label: string,
  component: JSX.Element
}

export default function ModalRegister({close}: Child): JSX.Element {

  const [medicalRecord, setMedicalRecord] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [birth, setBirth] = useState<Birth>({place: "", date: ""})
  const [gender, setGender] = useState<string>("laki - laki")
  const [bloodType, setBloodType] = useState<string>("A")
  const [education, setEducation] = useState<string>("SMA")
  const [religion, setReligion] = useState<string>("islam")
  const [wedding, setWedding] = useState<string>("menikah")
  const [nation, setNation] = useState<string>("indonesia")
  const [language, setLanguage] = useState<string>("indonesia")
  const [disability, setDisability] = useState<string>("tidak")
  const [parentName, setParentName] = useState<string>("")
  const [person, setPerson] = useState<string>("")
  const [personName, setPersonName] = useState<string>("")
  const [personWork, setPersonWork] = useState<string>("")
  const [address, setAddress] = useState<Address>({address:"", village:"", district:"", regencie:"", province:""})
  const [personAddress, setPersonAddress] = useState<Address>({address:"", village:"", district:"", regencie:"", province:""})
  const [nik, setNik] = useState<string>("")
  const [bpjs, setBpjs] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const [work, setWork] = useState<string>("")
  const [instance, setInstance] = useState<string>("")

  const patient: Patient = {
    medical_record: medicalRecord,
    name: name,
    birth: birth,
    gender: gender,
    blood: bloodType,
    education: education,
    religion: religion,
    wedding: wedding,
    nation: nation,
    language: language,
    disability: disability,
    mother_name: parentName,
    address: address,
    parent: {
      name: personName,
      work: personWork,
      address: personAddress
    },
    nik: nik,
    bpjs: bpjs,
    email: email,
    phone: phone,
    work: work,
    instance: instance
  }

  const input: Input[] = [
    {label: "Rekam Medis", component: <input type="text" value={medicalRecord} onChange={(e) => setMedicalRecord(e.target.value)} className="border border-(--line) px-2 py-1 rounded-md w-full" />},
    {label: "Nama Pasien", component: <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="border border-(--line) px-2 py-1 rounded-md w-full" />},
    {label: "Tempat & Tgl lahir", component: <div className="flex"><input type="text" value={birth.place} onChange={(e) => setBirth((prev) => ({...prev, place: e.target.value}))} className="border border-(--line) px-2 py-1 rounded-md w-full" /><input type="date" value={birth.date} onChange={(e) => setBirth((prev) => ({...prev, date: e.target.value}))} className="border border-(--line) px-2 py-1 rounded-md w-full ml-1" /></div>},
    {label: "Jenis kelamin", component: <select className="border border-(--line) px-2 py-1 rounded-md w-full" value={gender} onChange={(e) => setGender(e.target.value)}><option value="laki - laki">Laki - laki</option><option value="perempuan">Perempuan</option></select>},
    {label: "Golongan darah", component: <select className="border border-(--line) px-2 py-1 rounded-md w-full" value={bloodType} onChange={(e) => setBloodType(e.target.value)}><option value="A">A</option><option value="B">B</option><option value="AB">AB</option><option value="O">O</option></select>},
    {label: "Pendidikan", component: <select className="border border-(--line) px-2 py-1 rounded-md w-full" value={education} onChange={(e) => setEducation(e.target.value)}><option value="TK">TK</option><option value="SD">SD</option><option value="SMP">SMA</option><option value="SLTA/SEDERAJAT">SLTA/SEDERAJAT</option><option value="D1">D1</option><option value="D2">D2</option><option value="D3">D3</option><option value="D4">D4</option><option value="S1">S1</option><option value="S2">S2</option><option value="S3">S3</option></select>},
    {label: "Agama", component: <select className="border border-(--line) px-2 py-1 rounded-md w-full" value={religion} onChange={(e) => setReligion(e.target.value)}><option value="islam">Islam</option><option value="kristen">Kristen</option><option value="katolik">Katolik</option><option value="budha">Budha</option><option value="hindu">Hindu</option></select>},
    {label: "Pernikahan", component: <select className="border border-(--line) px-2 py-1 rounded-md w-full" value={wedding} onChange={(e) => setWedding(e.target.value)}><option value="menikah">Menikah</option><option value="cerai">Cerai</option><option value="dudha">Dudha</option><option value="janda">Janda</option></select>},
    {label: "Bangsa", component: <select className="border border-(--line) px-2 py-1 rounded-md w-full" value={nation} onChange={(e) => setNation(e.target.value)}><option value="indonesia">Indonesia</option></select>},
    {label: "Bahasa", component: <select className="border border-(--line) px-2 py-1 rounded-md w-full" value={language} onChange={(e) => setLanguage(e.target.value)}><option value="indonesia">Indonesia</option><option value="inggris">Inggris</option></select>},
    {label: "Cacat fisik", component: <select className="border border-(--line) px-2 py-1 rounded-md w-full" value={disability} onChange={(e) => setDisability(e.target.value)}><option value="ada">Ada</option><option value="tidak">Tidak ada</option></select>},
    {label: "Nama ibu", component: <input type="text" className="border border-(--line) px-2 py-1 rounded-md w-full" value={parentName} onChange={(e) => setParentName(e.target.value)} />},
    {label: "Penanggung jawab", component: <select className="border border-(--line) px-2 py-1 rounded-md w-full" value={person} onChange={(e) => setPerson(e.target.value)}><option value="ayah">Ayah</option><option value="ibu">Ibu</option></select>},
    {label: "Nama Penanggung jawab", component: <input type="text" className="border border-(--line) px-2 py-1 rounded-md w-full" value={personName} onChange={(e) => setPersonName(e.target.value)} />},
    {label: "Pekerjaan Penanggung jawab", component: <input type="text" className="border border-(--line) px-2 py-1 rounded-md w-full" value={personWork} onChange={(e) => setPersonWork(e.target.value)} />},
    {label: "BPJS", component: <input type="text" className="border border-(--line) px-2 py-1 rounded-md w-full" value={bpjs} onChange={(e) => setBpjs(e.target.value)} />},
    {label: "Email", component: <input type="text" className="border border-(--line) px-2 py-1 rounded-md w-full" value={email} onChange={(e) => setEmail(e.target.value)} />},
    {label: "Nomor HP", component: <input type="text" className="border border-(--line) px-2 py-1 rounded-md w-full" value={phone} onChange={(e) => setPhone(e.target.value)} />},
    {label: "Pekerjaan", component: <input type="text" className="border border-(--line) px-2 py-1 rounded-md w-full" value={work} onChange={(e) => setWork(e.target.value)} />},
    {label: "Instansi", component: <input type="text" className="border border-(--line) px-2 py-1 rounded-md w-full" value={instance} onChange={(e) => setInstance(e.target.value)} />},
    {label: "NIK", component: <input type="text" className="border border-(--line) px-2 py-1 rounded-md w-full" value={nik} onChange={(e) => setNik(e.target.value)} />},
    {label: "Alamat", component: <><input type="text" className="border border-(--line) px-2 py-1 rounded-md w-full" value={address.address} onChange={(e) => setAddress((prev) => ({...prev, address: e.target.value}))} /><div className="flex mt-1"><input type="text" className="border border-(--line) px-2 py-1 rounded-md w-full" value={personAddress.village} onChange={(e) => setAddress((prev) => ({...prev, village: e.target.value}))} /><input type="text" className="border border-(--line) px-2 py-1 rounded-md w-full ml-1" value={personAddress.district} onChange={(e) => setAddress((prev) => ({...prev, district: e.target.value}))} /></div><div className="flex mt-1"><input type="text" className="border border-(--line) px-2 py-1 rounded-md w-full" value={personAddress.regencie} onChange={(e) => setAddress((prev) => ({...prev, regencie: e.target.value}))} /><input type="text" className="border border-(--line) px-2 py-1 rounded-md w-full ml-1" value={personAddress.province} onChange={(e) => setAddress((prev) => ({...prev, province: e.target.value}))} /></div></>},
    {label: "Alamat Penanggung jawab", component: <><input type="text" className="border border-(--line) px-2 py-1 rounded-md w-full" value={personAddress.address} onChange={(e) => setPersonAddress((prev) => ({...prev, address: e.target.value}))} /><div className="flex mt-1"><input type="text" className="border border-(--line) px-2 py-1 rounded-md w-full" value={personAddress.village} onChange={(e) => setPersonAddress((prev) => ({...prev, village: e.target.value}))} /><input type="text" className="border border-(--line) px-2 py-1 rounded-md w-full ml-1" value={personAddress.district} onChange={(e) => setPersonAddress((prev) => ({...prev, district: e.target.value}))} /></div><div className="flex mt-1"><input type="text" className="border border-(--line) px-2 py-1 rounded-md w-full" value={personAddress.regencie} onChange={(e) => setPersonAddress((prev) => ({...prev, regencie: e.target.value}))} /><input type="text" className="border border-(--line) px-2 py-1 rounded-md w-full ml-1" value={personAddress.province} onChange={(e) => setPersonAddress((prev) => ({...prev, province: e.target.value}))} /></div></>},
  ]

  return (
    <Modal>
      <div className="w-[95%] h-[90%] bg-background border border-(--line) rounded-2xl flex">
        <div className="w-30%">
          <button onClick={() => close()}>Close</button>
        </div>
        <div className="w-70%"></div>
      </div>
    </Modal>
  )
}