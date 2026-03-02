import React from 'react';

const Page = () => {
  return (
    <div className="max-w-[1200px] mx-auto py-12 px-6 text-white leading-relaxed">
      <h1 className="text-3xl font-bold text-center mb-4">TERMOS E CONDIÇÕES</h1>
      <p className="text-center font-semibold mb-12 text-lg text-blue-300">TEAMLINO – Acompanhamento Online</p>

      <div className="space-y-8">
        {/* 1. Identificação */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-white">1. Identificação da Entidade</h2>
          <p>O serviço TeamLino é prestado por:</p>
          <div className="mt-2 space-y-1 font-medium text-gray-200">
            <p>VENTOS BENFAZEJOS, LDA</p>
            <p>NIF: 519247060</p>
            <p>Sede: Largo José Júlio nº10</p>
            <p>Contacto: +351 938 652 808</p>
            <p>Email: info@teamlino.pt</p>
          </div>
          <p className="mt-2 italic text-gray-400">Doravante designada por &quot;TeamLino&quot;.</p>
        </section>

        {/* 2. Objeto */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-white">2. Objeto do Serviço/Âmbito de atuação</h2>
          <p className="mb-4">A TeamLino presta um serviço de acompanhamento online personalizado, que pode incluir:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-200">
            <li>Planos de treino individualizados;</li>
            <li>Orientações nutricionais de caráter geral (não clínicas);</li>
            <li>Monitorização periódica;</li>
            <li>Acesso à aplicação digital;</li>
            <li>Comunicação remota com a equipa técnica.</li>
          </ul>
          <p className="mt-4 text-gray-300">O serviço é prestado exclusivamente à distância e não substitui acompanhamento médico ou avaliação clínica.</p>
        </section>

        {/* 3. Elegibilidade */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-white">3. Elegibilidade e Responsabilidade do Cliente</h2>
          <p className="mb-4">Ao aderir ao serviço, o Cliente declara que:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-200">
            <li>Tem 18 ou mais anos;</li>
            <li>Está apto para a prática de exercício físico;</li>
            <li>Informou qualquer condição clínica relevante;</li>
            <li>Prestou informações verdadeiras e completas.</li>
          </ul>
          <p className="mb-4">A execução dos planos é da exclusiva responsabilidade do Cliente.</p>
          <p>A TeamLino não se responsabiliza por lesões ou danos decorrentes de:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2 text-gray-300">
            <li>Execução incorreta dos exercícios;</li>
            <li>Omissão de informação médica relevante;</li>
            <li>Incumprimento das recomendações fornecidas.</li>
          </ul>
        </section>

        {/* 4. Planos */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-white">4. Planos de Subscrição</h2>
          <p className="mb-4">A TeamLino disponibiliza:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-200">
            <li>Subscrição Mensal</li>
            <li>Subscrição Trimestral</li>
            <li>Subscrição Semestral</li>
            <li>Outros planos que possam ser lançados futuramente</li>
          </ul>
          <p className="mt-4 text-gray-400">As condições específicas (preço, duração, benefícios incluídos) constam na página oficial no momento da adesão.</p>
        </section>

        {/* 5. Pagamento */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-white">5. Pagamento</h2>
          <p className="mb-4 text-gray-200">O pagamento dos serviços é efetuado antecipadamente.</p>
          <p className="mb-4 text-gray-200">A TeamLino disponibiliza os seguintes métodos de pagamento:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-300">
            <li>Cartão de débito ou crédito;</li>
            <li>MB Way;</li>
            <li>Referência Multibanco;</li>
            <li>Débito direto (quando aplicável);</li>
            <li>Processamento de pagamentos através das entidades Viva Wallet e Eupago;</li>
            <li>Pagamento faseado através da Cofidis.</li>
          </ul>
          <p className="text-sm text-gray-400">O Cliente reconhece que os pagamentos são processados por entidades externas certificadas, não sendo a TeamLino responsável por falhas técnicas, interrupções ou recusas de transação. A TeamLino não armazena dados completos de cartões bancários, sendo o processamento assegurado exclusivamente pelas entidades de pagamento autorizadas, de acordo com a nossa Política de Privacidade.</p>
        </section>

        {/* 6. Cofidis */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-white">6. Pagamento Faseado – Cofidis</h2>
          <p className="mb-4">Ao optar por pagamento faseado através da Cofidis, o Cliente celebra um contrato de crédito diretamente com essa entidade financeira.</p>
          <p>A TeamLino:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2 text-gray-200">
            <li>Não garante a aprovação do crédito;</li>
            <li>Não intervém nas condições contratuais entre Cliente e entidade financeira;</li>
            <li>Considera o serviço ativo após confirmação formal do pagamento ou aprovação do financiamento.</li>
          </ul>
          <p className="mt-4 text-gray-400">O incumprimento do contrato de crédito é regulado exclusivamente pela entidade financeira.</p>
        </section>

        {/* 7. Renovação */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-white">7. Renovação Automática</h2>
          <p className="mb-4">A renovação automática apenas ocorrerá se o Cliente selecionar expressamente essa opção no momento da adesão.</p>
          <p>Caso escolhida:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2 mb-4 text-gray-200">
            <li>A subscrição renova-se automaticamente por período idêntico;</li>
            <li>O Cliente poderá cancelar antes da data de renovação;</li>
            <li>O cancelamento impede a cobrança do período seguinte.</li>
          </ul>
          <p className="text-gray-400">Na ausência de seleção expressa, o plano não será renovado automaticamente.</p>
        </section>

        {/* 8. Livre Resolução */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-white">8. Direito de Livre Resolução</h2>
          <p className="mb-4">Nos termos do Decreto-Lei n.º 24/2014, o Cliente dispõe de 14 dias para resolver o contrato sem necessidade de indicar motivo, contados a partir do primeiro dia da celebração do contrato.</p>
          <p className="mb-4">Ao aderir ao serviço, o Cliente pode solicitar o início imediato da prestação de serviços.</p>
          <p className="mb-4 text-gray-200">Após confirmação do pagamento, a TeamLino terá até 1 (um) dia útil para verificar a conta do Cliente. Após esta verificação, será enviado por email um guia com os primeiros passos, incluindo:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-300">
            <li>Como aceder à App TeamLino;</li>
            <li>Instruções para envio da Avaliação Inicial;</li>
            <li>Explicação do funcionamento do plano e comunicação com a equipa.</li>
          </ul>
          <p className="mb-4 font-bold text-blue-200">O envio da Avaliação Inicial pelo Cliente é obrigatório para a elaboração dos planos personalizados. Só após a receção e análise desta Avaliação Inicial, a TeamLino emitirá:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-200">
            <li>O plano de treino personalizado;</li>
            <li>O plano nutricional individualizado.</li>
          </ul>
          <p className="mb-4">Os planos ficarão disponíveis na App até ao prazo máximo de 48 horas após a análise da Avaliação Inicial.</p>
          <p className="mb-4">Caso o serviço tenha efetivamente iniciado dentro do prazo legal de livre resolução, o Cliente reconhece que será devido o pagamento proporcional ao trabalho já realizado, correspondente, nomeadamente, à:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Análise da Avaliação Inicial enviada pelo Cliente;</li>
            <li>Preparação dos planos de treino e nutricional personalizados (após análise da Avaliação Inicial).</li>
          </ul>
          <p>Todo o restante valor da subscrição será reembolsado caso o Cliente exerça o direito de resolução dentro do prazo legal, excetuando o valor proporcional ao serviço já prestado.</p>
        </section>

        {/* 9. Cancelamento */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-white">9. Cancelamento e Reembolsos</h2>
          <p className="font-bold mb-2">Reembolsos</p>
          <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-200">
            <li>Não serão efetuados reembolsos referentes a períodos já iniciados, salvo disposição legal em contrário;</li>
            <li>O valor pago corresponde ao acesso ao serviço contratado e à elaboração dos planos personalizados, conforme descrito no ponto 8.</li>
          </ul>
          <p className="font-bold mb-2">Não utilização do serviço</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-200">
            <li>A eventual não utilização do serviço pelo Cliente não gera direito a reembolso;</li>
            <li>O acesso aos conteúdos, planos e acompanhamento é disponibilizado conforme o plano contratado, sendo de responsabilidade do Cliente a sua utilização.</li>
          </ul>
        </section>

        {/* 10. Fotografias */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-white">10. Envio de Fotografias e Avaliação Física</h2>
          <p className="mb-4">Para efeitos de Avaliação Inicial e acompanhamento da evolução, poderá ser solicitado ao Cliente o envio de fotografias corporais e dados físicos.</p>
          <p className="mb-2 font-bold">O Cliente declara ter conhecimento que:</p>
          <p className="font-semibold mt-4 italic">Finalidade do envio</p>
          <ul className="list-disc pl-6 space-y-1 mb-4 text-gray-200">
            <li>Avaliação técnica do estado físico;</li>
            <li>Monitorização da evolução do plano de treino e nutricional;</li>
            <li>Ajuste do plano personalizado, conforme necessidades individuais do Cliente.</li>
          </ul>
          <p className="font-semibold italic">Confidencialidade e segurança</p>
          <ul className="list-disc pl-6 space-y-1 mb-4 text-gray-200">
            <li>Todas as fotografias e dados fornecidos serão tratados com estrita confidencialidade, armazenados em sistemas seguros e utilizados apenas para os fins acima descritos, tudo de acordo com a nossa Política de Privacidade;</li>
            <li>A TeamLino compromete-se a não divulgar, partilhar ou comercializar qualquer imagem ou dado sem o consentimento explícito do Cliente.</li>
          </ul>
          <p className="font-semibold italic">Responsabilidade do Cliente</p>
          <ul className="list-disc pl-6 space-y-1 text-gray-200">
            <li>O Cliente garante que todas as imagens fornecidas são legítimas, autênticas e de sua própria pessoa, isentando a TeamLino de qualquer responsabilidade por informações incorretas ou fraudulentas;</li>
            <li>O Cliente reconhece que a não prestação ou envio tardio das fotografias poderá impactar a precisão da Avaliação Inicial e dos planos personalizados, sem gerar direito a reembolso.</li>
          </ul>
        </section>

        {/* 11. Resultados */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-white">11. Resultados</h2>
          <p className="mb-4">A TeamLino não garante resultados específicos, incluindo perda de peso, ganho de massa muscular, performance física ou alterações estéticas.</p>
          <p className="mb-4">Os resultados dependem exclusivamente da adesão do Cliente aos planos, consistência, esforço individual, condições físicas e fatores externos que fogem ao controlo da TeamLino.</p>
          <p>O Cliente reconhece que os planos fornecidos têm caráter orientativo e personalizado, servindo como guia para apoiar a sua evolução, mas que nenhum resultado é garantido.</p>
        </section>

        {/* 12. Propriedade Intelectual */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-white">12. Propriedade Intelectual</h2>
          <p className="mb-4">Todos os conteúdos disponibilizados pela TeamLino, incluindo, mas não se limitando a, planos de treino, planos nutricionais, vídeos, textos, imagens e materiais educativos, são propriedade exclusiva da TeamLino e encontram-se protegidos pelas normas de propriedade intelectual aplicáveis.</p>
          <p className="mb-2 font-bold">É expressamente proibido ao Cliente:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-200">
            <li>Partilhar, ceder ou disponibilizar os planos, conteúdos ou materiais a terceiros;</li>
            <li>Reproduzir, copiar, modificar, comercializar ou explorar os conteúdos de qualquer forma sem autorização expressa e por escrito da TeamLino;</li>
            <li>Utilizar os conteúdos, planos ou materiais para fins profissionais, comerciais ou educativos fora do âmbito do serviço contratado.</li>
          </ul>
          <p>O acesso aos conteúdos é estritamente pessoal, intransmissível e limitado ao período de subscrição contratado pelo Cliente. Qualquer violação destas disposições poderá resultar em indenização por danos.</p>
        </section>

        {/* 13. Proteção de Dados */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-white">13. Proteção de Dados</h2>
          <p className="mb-4">O tratamento de dados pessoais do Cliente é efetuado em conformidade com o Regulamento (UE) 2016/679 – RGPD e demais legislação aplicável sobre proteção de dados e da nossa Política de Privacidade.</p>
          <p className="font-bold mb-2">Finalidade do tratamento</p>
          <ul className="list-disc pl-6 space-y-1 mb-4 text-gray-200">
            <li>Acompanhamento dos planos de treino e nutricionais;</li>
            <li>Comunicação com o Cliente sobre o serviço contratado;</li>
            <li>Emissão de faturas e cumprimento de obrigações legais;</li>
            <li>Melhoria e personalização do serviço oferecido pela TeamLino.</li>
          </ul>
          <p className="mb-4">O Cliente pode, a qualquer momento, exercer os seus direitos de acesso, retificação, eliminação ou oposição, contactando: info@teamlino.pt. Reclamações podem ser apresentadas à CNPD (https://www.cnpd.pt).</p>
        </section>

        {/* 14. Limitação de Responsabilidade */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-white">14. Limitação de Responsabilidade</h2>
          <p className="mb-4">A TeamLino presta um serviço baseado nas informações fornecidas pelo Cliente, não substituindo acompanhamento médico. A responsabilidade limita-se à correta prestação do serviço contratado.</p>
          <p className="mb-2 font-bold">A TeamLino não poderá ser responsabilizada por:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-200">
            <li>Lesões ou problemas físicos resultantes da prática de exercício;</li>
            <li>Execução incorreta dos exercícios;</li>
            <li>Omissão ou prestação de informações falsas por parte do Cliente;</li>
            <li>Não cumprimento das orientações fornecidas;</li>
            <li>Interrupções técnicas da App ou serviços de terceiros.</li>
          </ul>
          <p>Qualquer responsabilidade fica limitada ao valor efetivamente pago pelo Cliente relativamente ao plano em vigor.</p>
        </section>

        {/* 15. Lei Aplicável */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-white">15. Lei Aplicável e Foro</h2>
          <p className="mb-4">Os presentes Termos e Condições regem-se pela legislação portuguesa.</p>
          <p>Qualquer litígio emergente será resolvido pelos tribunais competentes da comarca da sede da TeamLino, sem prejuízo de outros meios de resolução alternativa de litígios previstos na lei.</p>
        </section>
      </div>
    </div>
  );
};

export default Page;