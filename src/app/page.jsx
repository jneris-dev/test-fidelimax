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

export default function Home() {
  return (
    <article>
      <Header />
      <section className="md:px-4 mx-auto py-10 sm:w-full md:max-w-2xl">
        <h1 className="text-3xl text-center md:text-start lg:text-[40px] text-white font-semibold pb-5">Pesquisa de Satisfação</h1>
        <form className="relative mx-auto sm:w-full md:max-w-2xl bg-white text-gray-8 rounded-2xl p-5 md:p-8 h-full text-start">
          <Rating
            id={'question-1'}
            label={'Título da pergunta deve ficar aqui'}
            custom={'text-xl md:text-2xl font-semibold'}
            description={'Também é importante ter um espaço para o dono da loja colocar uma descrição da pergunta para ajudar o entendimento do usuário'}
            required={true}
          />

          <Radio
            id={'question-2'}
            label={'Título da pergunta deve ficar aqui'}
            custom={'text-xl md:text-2xl font-semibold'}
            description={'Também é importante ter um espaço para o dono da loja colocar uma descrição da pergunta para ajudar o entendimento do usuário'}
            required={true}
            options={optionsRadio}
          />

          <Textarea
            id={'question-3'}
            placeholder={'Digite aqui...'}
            label={`Descreva o motivo da sua avaliação <span class="text-gray-5">(opcional)</span>`}
            required={false}
          />

          <Select
            id={'question-4'}
            placeholder={'Qual loja você frequenta?'}
            required={true}
            options={optionSelect}
          />

          <Radio
            id={'question-5'}
            label={'Pergunta de escolha única?'}
            required={true}
            options={optionRadio}
          />

          <MultipleSelect
          id={'question-6'}
          label={'Pergunta de múltipla escolha?'}
          options={optionMultipleSelect}
          />

          {/* <div className="mb-10">
            <label className="block mb-2 font-medium">Pergunta de múltipla escolha?</label>

            <div className="flex flex-wrap gap-4">

              <div>
                <input className="peer sr-only" id="option1" type="checkbox" tabIndex="-1" name="option" />

                <label
                  htmlFor="option1"
                  className="block w-full rounded-2xl border border-gray-2 p-3"
                  tabIndex="0"
                >
                  <span className="text-sm">OPC 1</span>
                </label>
              </div>

              <div>
                <input className="peer sr-only" id="option2" type="checkbox" tabIndex="-1" name="option" />

                <label
                  htmlFor="option2"
                  className="block w-full rounded-2xl border border-gray-2 p-3"
                  tabIndex="0"
                >
                  <span className="text-sm">OPCÃO 2</span>
                </label>
              </div>

              <div>
                <input className="peer sr-only" id="option3" type="checkbox" tabIndex="-1" name="option" />

                <label
                  htmlFor="option3"
                  className="block w-full rounded-2xl border border-gray-2 p-3"
                  tabIndex="0"
                >
                  <span className="text-sm">OP</span>
                </label>
              </div>

              <div>
                <input className="peer sr-only" id="option4" type="checkbox" tabIndex="-1" name="option" />

                <label
                  htmlFor="option4"
                  className="block w-full rounded-2xl border border-gray-2 p-3"
                  tabIndex="0"
                >
                  <span className="text-sm">OPCÃO 4</span>
                </label>
              </div>

              <div>
                <input className="peer sr-only" id="option5" type="checkbox" tabIndex="-1" name="option" />

                <label
                  htmlFor="option5"
                  className="block w-full rounded-2xl border border-gray-2 p-3"
                  tabIndex="0"
                >
                  <span className="text-sm">OPCÃO 5</span>
                </label>
              </div>

              <div>
                <input className="peer sr-only" id="option6" type="checkbox" tabIndex="-1" name="option" />

                <label
                  htmlFor="option6"
                  className="block w-full rounded-2xl border border-gray-2 p-3"
                  tabIndex="0"
                >
                  <span className="text-sm">OP</span>
                </label>
              </div>

              <div>
                <input className="peer sr-only" id="option7" type="checkbox" tabIndex="-1" name="option" />

                <label
                  htmlFor="option7"
                  className="block w-full rounded-2xl border border-gray-2 p-3"
                  tabIndex="0"
                >
                  <span className="text-sm">OPC 7</span>
                </label>
              </div>

              <div>
                <input className="peer sr-only" id="option8" type="checkbox" tabIndex="-1" name="option" />

                <label
                  htmlFor="option8"
                  className="block w-full rounded-2xl border border-gray-2 p-3"
                  tabIndex="0"
                >
                  <span className="text-sm">OPC</span>
                </label>
              </div>
            </div>

          </div>

          <div className="mb-10">
            <label className="block mb-2 font-medium">Pergunta demúltipla escolha?</label>

            <fieldset>
              <legend className="sr-only">Checkbox variants</legend>

              <div className="flex items-center mb-4">
                <input id="checkbox-1" type="checkbox" value="" />
                <label for="checkbox-1" className="ms-2">OPC 1</label>
              </div>

              <div className="flex items-center mb-4">
                <input id="checkbox-2" type="checkbox" value="" />
                <label for="checkbox-2" className="ms-2">OPC 2</label>
              </div>

              <div className="flex items-center mb-4">
                <input id="checkbox-3" type="checkbox" value="" />
                <label for="checkbox-3" className="ms-2">OPC 3</label>
              </div>

              <div className="flex items-center mb-4">
                <input id="checkbox-4" type="checkbox" value="" />
                <label for="checkbox-4" className="ms-2">OPC 4</label>
              </div>

              <div className="flex items-center mb-4">
                <input id="checkbox-5" type="checkbox" value="" />
                <label for="checkbox-5" className="ms-2">OPC 5</label>
              </div>

              <div className="flex items-center mb-4">
                <input id="checkbox-6" type="checkbox" value="" />
                <label for="checkbox-6" className="ms-2">OPC 6</label>
              </div>

              <div className="flex items-center mb-4">
                <input id="checkbox-7" type="checkbox" value="" />
                <label for="checkbox-7" className="ms-2">OPC 7</label>
              </div>

              <div className="flex items-center mb-4">
                <input id="checkbox-8" type="checkbox" value="" />
                <label for="checkbox-8" className="ms-2">OPC 8</label>
              </div>

              <div className="flex items-center mb-4">
                <input id="checkbox-9" type="checkbox" value="" />
                <label for="checkbox-9" className="ms-2">OPC 9</label>
              </div>

              <div className="flex items-center">
                <input id="checkbox-10" type="checkbox" value="" />
                <label for="checkbox-10" className="ms-2">OPC 10</label>
              </div>
            </fieldset>

          </div> */}

          <Textarea
            id={'question-8'}
            placeholder={'Digite a resposta'}
            label={'Pergunta de texto?'}
            required={false}
          />

          <Textarea
            id={'question-9'}
            placeholder={'Digite a resposta'}
            label={'Pergunta de texto?'}
            required={true}
          />

          <Button
            label={'Enviar'}
          />
        </form>
      </section>
    </article>
  )
}