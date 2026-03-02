import React from 'react';

const Page = () => {
  return (
    <div className="max-w-[1200px] mx-auto py-12 px-6 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold text-center mb-4">Política de Privacidade – TeamLino</h1>
      <p className="text-center text-gray-500 mb-12 italic">Última revisão 28/02/2026</p>

      <div className="space-y-8">
        <section>
          <p className="mb-4">
            A TeamLino respeita a tua privacidade e compromete-se a proteger os teus dados pessoais, de acordo com o Regulamento (UE) 2016/679 – RGPD e legislação portuguesa aplicável.
          </p>
          <p>
            Ao utilizar a nossa app, website ou serviços, concordas com a recolha e tratamento dos teus dados pessoais nos termos desta Política de Privacidade.
          </p>
        </section>

        {/* 1. Responsável */}
        <section className="border-b border-gray-200 pb-6">
          <h2 className="text-xl font-bold mb-3">1. Responsável pelo Tratamento de Dados</h2>
          <p className="font-semibold text-blue-900">Ventos Benfazejos Lda – NUIPC 519 247 060</p>
        </section>

        {/* 2. Dados Pessoais */}
        <section className="border-b border-gray-200 pb-6">
          <h2 className="text-xl font-bold mb-3">2. Dados Pessoais Recolhidos</h2>
          <p className="mb-3">Durante a tua interação com a TeamLino, poderemos recolher os seguintes dados:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Dados de identificação:</strong> nome, email, contacto telefónico, morada;</li>
            <li><strong>Dados de registo e faturação:</strong> NIF, detalhes de pagamento;</li>
            <li><strong>Dados de saúde e condição física:</strong> altura, peso, composição corporal, fotos corporais enviadas para avaliação inicial ou acompanhamento;</li>
            <li><strong>Dados de utilização da app:</strong> registo de treino, progresso, interações com a equipa;</li>
            <li><strong>Dados de marketing (quando aplicável):</strong> preferências de contacto e comunicação.</li>
            <li><strong>Dados de navegação (quando aplicável):</strong> endereço IP, localização aproximada, tipo de dispositivo e de browser.</li>
          </ul>
        </section>

        {/* 3. Finalidade */}
        <section className="border-b border-gray-200 pb-6">
          <h2 className="text-xl font-bold mb-3">3. Finalidade do Tratamento</h2>
          <p className="mb-3">Os teus dados são utilizados exclusivamente para:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Executar o contrato de prestação de serviços (planos de treino e nutrição personalizados);</li>
            <li>Avaliação inicial, acompanhamento e monitorização da evolução;</li>
            <li>Comunicação sobre a prestação do serviço e suporte técnico;</li>
            <li>Envio de informações e novidades sobre serviços da TeamLino, quando consentido;</li>
            <li>Cumprimento de obrigações legais e fiscais, nomeadamente emitir faturas e recibos;</li>
            <li>Processamento de pagamentos (Cofidis, Viva Wallet, Eupago, MBWay, cartão de crédito).</li>
            <li>Analisar o desempenho do site para melhoria contínua (quando aplicável)</li>
          </ul>
        </section>

        {/* 4. Fundamento legal */}
        <section className="border-b border-gray-200 pb-6">
          <h2 className="text-xl font-bold mb-3">4. Fundamento legal</h2>
          <p className="mb-3">Tratamos os dados com base nos seguintes fundamentos legais:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Consentimento do titular dos dados (ex: subscrição de serviço);</li>
            <li>Execução de contrato ou diligências pré-contratuais (ex: marcação de consultas ou compra de produtos)</li>
            <li>Cumprimento de obrigação legal (ex: emissão de faturas conforme legislação fiscal)</li>
            <li>Interesse legítimo (ex: melhorar os serviços, proteger o website contra abusos)</li>
          </ul>
        </section>

        {/* 5. Consentimento */}
        <section className="border-b border-gray-200 pb-6">
          <h2 className="text-xl font-bold mb-3">5. Consentimento</h2>
          <p className="mb-4">
            O envio de fotografias corporais para avaliação é obrigatório para a personalização do plano, mas o uso destas fotos para marketing ou divulgação de casos de sucesso exige consentimento expresso do Cliente, que pode ser revogado a qualquer momento.
          </p>
          <p className="mb-4">
            O consentimento para marketing pode ser retirado a qualquer momento através do email: info@teamlino.pt.
          </p>
          <p className="font-medium">As fotografias corporais não são, em qualquer momento, partilhadas com terceiros.</p>
        </section>

        {/* 6. Armazenamento */}
        <section className="border-b border-gray-200 pb-6">
          <h2 className="text-xl font-bold mb-3">6. Armazenamento, Conservação e Segurança dos Dados</h2>
          <p className="mb-3">Todos os dados são armazenados de forma segura e acessíveis apenas à equipa da TeamLino.</p>
          <p className="mb-4">Adotamos medidas técnicas e organizacionais adequadas para proteger os teus dados contra acesso não autorizado, perda ou divulgação indevida.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Dados de faturação:</strong> guardados por 10 anos, conforme obrigação legal</li>
            <li><strong>Dados de contacto e histórico de interações:</strong> guardados até 2 anos após a última interação</li>
            <li><strong>Dados usados com base em consentimento:</strong> eliminados quando o consentimento for retirado</li>
          </ul>
        </section>

        {/* 7. Cookies */}
        <section className="border-b border-gray-200 pb-6">
          <h2 className="text-xl font-bold mb-3">7. Cookies e Tecnologias Semelhantes</h2>
          <p className="mb-3">Utilizamos cookies para melhorar a tua experiência na app e no website, armazenar preferências e analisar tráfego.</p>
          <p className="mb-3">Alguns cookies são fornecidos por terceiros para publicidade direcionada (geotargeting, segmentação de interesses), incluindo Google AdSense e outros parceiros.</p>
          <p>Podes desativar os cookies no teu browser, mas isso pode limitar funcionalidades do website e da app.</p>
        </section>

        {/* 8. Ligações a Terceiros */}
        <section className="border-b border-gray-200 pb-6">
          <h2 className="text-xl font-bold mb-3">8. Ligações a Sites de Terceiros</h2>
          <p className="mb-3">O website e app podem conter links para sites de terceiros.</p>
          <p className="mb-3">Não partilhamos os seus dados pessoais com terceiros sem prévia autorização do Utilizador, exceto nas seguintes situações:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Plataformas de email marketing (ex: MailerLite)</li>
            <li>Serviços de faturação e pagamentos (ex: Cofidis, Viva Wallet, Eupago, MBWay, cartão de crédito).</li>
            <li>Serviços de alojamento web e manutenção técnica</li>
            <li>Contabilidade (para efeitos fiscais)​</li>
            <li>Cumprimentos de outras obrigações legais (como notificações judiciais), se aplicável</li>
          </ul>
          <p className="italic text-sm">Todos os prestadores atuam como subcontratantes, estando obrigados a cumprir o RGPD e assinam documentação em conformidade.</p>
        </section>

        {/* 9. Direitos */}
        <section className="border-b border-gray-200 pb-6">
          <h2 className="text-xl font-bold mb-3">9. Direitos do Cliente/Utilizador:</h2>
          <p className="mb-4">Disponibilizamos aos Clientes/ utilizadores os meios necessários para garantir que seus dados pessoais estejam corretos e sempre atualizados.</p>
          <p className="mb-4">
            O utilizador poderá, de acordo com as disposições legais aplicáveis ​​em matéria de proteção de dados, solicitar o acesso, a retificação, o apagamento ou o bloqueio de seus dados pessoais, bem como opor-se ao seu tratamento, e envidaremos todos os esforços para atender à solicitação, sem custos excessivos e o mais rapidamente possível, a menos que sejamos obrigados por lei a manter os dados em questão.
          </p>
          <p className="mb-4 text-sm text-gray-600">
            O Utilizador deve estar ciente de que pode ser necessário um período razoável de tempo para alterar, excluir ou remover os dados solicitados do Site e/ou de nossos sistemas de backup.
          </p>
          <p className="mb-4">
            De acordo com as disposições legais aplicáveis, os utilizadores poderão, a qualquer momento e segundo critérios razoáveis, solicitar informações adicionais sobre as práticas de recolha, armazenamento e processamento de dados, bem como sobre as finalidades para as quais os dados recolhidos se destinam.
          </p>
          <p className="font-bold">Para exercer estes direitos, contacta: <a href="mailto:info@teamlino.pt" className="text-blue-600 underline">info@teamlino.pt</a></p>
        </section>

        {/* 10. Autoridade de Controlo */}
        <section className="border-b border-gray-200 pb-6">
          <h2 className="text-xl font-bold mb-3">10. Autoridade de Controlo</h2>
          <p className="mb-2">Para questões ou reclamações sobre o tratamento de dados pessoais, podes contactar a Comissão Nacional de Proteção de Dados (CNPD):</p>
          <div className="pl-4 border-l-2 border-gray-300">
            <p>Website: <a href="https://www.cnpd.pt" target="_blank" rel="noreferrer" className="text-blue-600 underline">https://www.cnpd.pt</a></p>
            <p>Morada: Av. D. Carlos I, 134, 1.º, 1200-651 Lisboa</p>
          </div>
        </section>

        {/* 11. Alterações */}
        <section>
          <h2 className="text-xl font-bold mb-3">11. Alterações à Política de Privacidade</h2>
          <p>
            A TeamLino reserva-se ao direito de alterar esta política a qualquer momento. Recomenda-se que consultes o seu cabeçalho regularmente para verificares a última versão e te manteres atualizado.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Page;