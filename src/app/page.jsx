"use client"

import { Rating } from "@/components/Rating";
import { Button } from "@/components/Button";
import { Radio } from "@/components/Radio";
import { Select } from "@/components/Select";
import { Textarea } from "@/components/Textarea";
import { optionRadio } from "@/util/optionRadio";
import { optionSelect } from "@/util/optionSelect";
import { optionsRadio } from "@/util/optionsRadio";
import { Header } from "@/components/Header";
import { MultipleSelect } from "@/components/MultipleSelect";
import { optionMultipleSelect } from "@/util/optionMultipleSelect";
import { optionCheckbox } from "@/util/optionCheckbox";
import { useState } from "react";
import { Checkbox } from "@/components/Checkbox";


export default function Home() {
  const [fields, setFields] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: [],
    seven: [],
    eight: "",
    nine: ""
  });

  const onFieldChange = (event) => {
    let value = event.target.value

    if (event.target.dataset.tag) {
      setFields({ ...fields, [event.target.dataset.tag]: value })
      return null
    }

    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }

    setFields({ ...fields, [event.target.id]: value });
    // setValidation(false)
  };


  const handleMultipleSelect = (e) => {
    const value = e.target.value;

    if (fields.six.includes(value)) {
      fields.six = fields.six.filter((cur) => cur !== value)
    }
    else {
      fields.six = [...fields.six, value];
    }

    fields.six.sort()

    setFields({ ...fields });
  };

  const handleMultipleCheckbox = (e) => {
    const value = e.target.value;

    if (fields.seven.includes(value)) {
      fields.seven = fields.seven.filter((cur) => cur !== value)
    }
    else {
      fields.seven = [...fields.seven, value];
    }

    fields.seven.sort()

    setFields({ ...fields });
  };

  const handleSubmit = (event) => {
  };

  console.log(fields)
  return (
    <article>
      <Header />
      <section className="md:px-4 mx-auto py-10 sm:w-full md:max-w-2xl">
        <h1 className="text-3xl text-center md:text-start lg:text-[40px] text-white font-semibold pb-5">Pesquisa de Satisfação</h1>
        <form onSubmit={handleSubmit} className="relative mx-auto sm:w-full md:max-w-2xl bg-white text-gray-8 rounded-2xl p-5 md:p-8 h-full text-start">
          <Rating
            id={'one'}
            label={'Título da pergunta deve ficar aqui'}
            custom={'text-xl md:text-2xl font-semibold'}
            description={'Também é importante ter um espaço para o dono da loja colocar uma descrição da pergunta para ajudar o entendimento do usuário'}
            // required={true}
            onChange={onFieldChange}
            value={fields.one}
          />

          <Radio
            id={'two'}
            label={'Título da pergunta deve ficar aqui'}
            custom={'text-xl md:text-2xl font-semibold'}
            description={'Também é importante ter um espaço para o dono da loja colocar uma descrição da pergunta para ajudar o entendimento do usuário'}
            // required={true}
            options={optionsRadio}
            onChange={onFieldChange}
            value={fields.two}
          />

          <Textarea
            id={'three'}
            placeholder={'Digite aqui...'}
            label={`Descreva o motivo da sua avaliação <span class="text-gray-5">(opcional)</span>`}
            // required={false}
            onChange={onFieldChange}
            value={fields.three}
          />

          <Select
            id={'four'}
            placeholder={'Qual loja você frequenta?'}
            // required={true}
            options={optionSelect}
            onChange={onFieldChange}
            value={fields.four}
          />

          <Radio
            id={'five'}
            label={'Pergunta de escolha única?'}
            // required={true}
            options={optionRadio}
            onChange={onFieldChange}
            value={fields.five}
          />

          <MultipleSelect
            id={'six'}
            label={'Pergunta de múltipla escolha?'}
            onChange={handleMultipleSelect}
            value={fields.six}
            options={optionMultipleSelect}
            validationMessage="Campo obrigatório"
            required
          />

          <Checkbox
            id={'seven'}
            label={'Pergunta de múltipla escolha?'}
            onChange={handleMultipleCheckbox}
            value={fields.seven}
            options={optionCheckbox}
            validationMessage="Campo obrigatório"
            required
          />

          <Textarea
            id={'eight'}
            placeholder={'Digite a resposta'}
            label={'Pergunta de texto?'}
            // required={false}
            onChange={onFieldChange}
            value={fields.eight}
          />

          <Textarea
            id={'nine'}
            placeholder={'Digite a resposta'}
            label={'Pergunta de texto?'}
            // required={true}
            onChange={onFieldChange}
            value={fields.nine}
          />

          <Button
            label={'Enviar'}
          />
        </form>
      </section>
    </article>
  )
}