import toast from 'react-hot-toast';
import { Input } from "../Input";
import { Container, Content, DoubleElementRow, ButtonRow } from "./styles";
import { RiUserLine } from "react-icons/ri"
import { BsTelephone } from "react-icons/bs"
import { MdWorkOutline, MdNetworkWifi } from "react-icons/md"
import { Button } from "../Button";
import { FormEvent, useEffect, useState } from "react";

interface UserProps {
  name: string,
  work: string,
  ipAddress: string,
  cellphone: string,
}

export function Summary() {
  const [ipValue, setIpValue] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [workValue, setWorkValue] = useState('');
  const [cellphoneValue, setCellphoneValue] = useState('');

  useEffect(() => {
    const data = localStorage.getItem("CowalaSoftware:userData");

    if (!data) {
      return;
    }

    const dataJson: UserProps = JSON.parse(data);

    setNameValue(dataJson.name)
    setIpValue(dataJson.ipAddress)
    setWorkValue(dataJson.work)
    setCellphoneValue(dataJson.cellphone)
  }, [])

  function deleteData() {
    localStorage.removeItem("CowalaSoftware:userData");
    setNameValue('')
    setIpValue('')
    setWorkValue('')
    setCellphoneValue('')

    toast.success("Dados excluidos", {
      icon: "🔥",
      style: {
        borderRadius: '10px',
        background: '#080B2D',
        color: '#fff',
      }
    });
  }

  function saveData(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data: UserProps = {
      name: nameValue,
      work: workValue,
      ipAddress: ipValue,
      cellphone: cellphoneValue,
    }

    localStorage.setItem("CowalaSoftware:userData", JSON.stringify(data));

    toast.success("Dados salvos", {
      icon: "🥳",
      style: {
        borderRadius: '10px',
        background: '#080B2D',
        color: '#fff',
      }
    });
  }

  function checkIpAddress() {
    toast.promise(fetch('https://ip-fast.com/api/ip/').then(response => response.text().then(data => setIpValue(data))), {
      loading: 'Verificando IP',
      success: 'IP encontrado',
      error: 'Houve um erro ao verificar seu IP, tente novamente.',
    }, {
      style: {
        borderRadius: '10px',
        background: '#080B2D',
        color: '#fff',
      }
    });
  }

  return (
    <Container>
      <Content>

        <form onSubmit={event => saveData(event)}>

          <Input value={nameValue} onChange={event => setNameValue(event.target.value)} icon={<RiUserLine size={20} />} name="Seu Nome" />

          <DoubleElementRow>
            <Input value={workValue} onChange={event => setWorkValue(event.target.value)} icon={<MdWorkOutline size={20} />} name="Sua Profissão" />
            <Input value={cellphoneValue.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")} minLength={13} maxLength={13} onChange={event => setCellphoneValue(event.target.value.replace(/[^\d]/g, ""))} icon={<BsTelephone size={20} />} name="Celular" />
          </DoubleElementRow>

          <DoubleElementRow>
            <Input onChange={() => { }} value={ipValue} icon={<MdNetworkWifi size={20} />} name="Meu IP" />
            <Button type='button' onClick={() => checkIpAddress()} color="primary-button" title="Encontrar IP" />
          </DoubleElementRow>

          <ButtonRow>
            <Button type="submit" color="secondary-button" title="Salvar" />
            <Button type='button' onClick={deleteData} color="secondary-button" title="Limpar" />
          </ButtonRow>

        </form>

      </Content>
    </Container>
  )
}