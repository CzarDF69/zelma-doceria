# Projeto: Cardápio Digital

* Versão: 1.0
* Desenvolvedor: César Augusto Tomm
* Data: 01/07/2024
* Cliente: Zelma Doceria e Cafeteria
* Descrição: Listar valores de produtos e serviços, no celular do cliente, a partir da leitura de um QR-Code.

## Objetivo acadêmico

Este projeto visa atender exigência de atividade de extensão, prevista na Resolução CNE/CES nº 7, de 18 de dezembro de 2018 e que integra o **Plano de Aprendizagem** da disciplina **Computação em Nuvem**, do 2º semestre do curso de **Sistemas para Internet** da **Faculdade Estácio de Santa Catarina**.

## Tecnologias empregadas

* [HTML5, CSS, Javascript, Bootstrap e JQuery](https://www.w3schools.com/)
* [Amazon Web Services - AWS](https://aws.amazon.com/pt/console/)
* [QR Plus](https://www.qrplus.com.br/)

## Descrição do projeto

Para execução deste projeto, inicialmente foi desenvolvida uma página web usando HTML5, CSS, Javascript, Bootstrap e JQuery, cuja funcionalidade principal é ler um arquivo no formato JSON e apresentar as informações conforme a seleção de um dos botões disponíveis.

Para apresentar a página na internet, o projeto foi salvo na raiz de um bucket S3 da Amazon, com hospedagem estática desabilidada e bloqueio de acesso público ativado. A política de acesso ao bucket permite leitura originada do CloudFront da AWS.

Para que o acesso público aconteça com segurança, foi criado um domínio de distribuição usando o CloudFront, com o domínio de origem configurado para apontar para o bucket que contém a página salva.

Por fim, com a página do cardápio digital aberta no Google Chrome, a imagem do QR-Code de acesso foi gerada usando o plugin QR Plus.
