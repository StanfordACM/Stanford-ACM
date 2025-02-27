import { Code } from '../../components/code';
import Layout from '../../components/layout';
import {
  LinkComponent,
  Paragraph,
  Section,
  Title
} from '../../components/section';

const thinker_example = `<|im_start|>user
How many r's are in raspberry?<|im_end|>
<|im_start|>assistant
<|im_start|>thinker
To find out how many 'r's' are in the word "raspberry,"`;

const think_after_sft = `<|im_start|>user
How many r's are in raspberry?<|im_end|>
<|im_start|>assistant
<|im_start|>think
Let's break down the process of counting the number of 'r' letters in the 
word "raspberry".`;

const listen = `Back to the initial thought of rearranging [abbrv.] the letters:

*   LISETN (no word)
*   LITSEN (no word)
*   LITSEN (no word)
*   LITSEN (no word)`;

export default function s1() {
  return (
    <Layout title="s1" pageName="aiClinic">
      <Section>
        <Title>Training a reasoning model for free (almost)</Title>

        <Paragraph>
          In Stanford ACM's AI Clinic's February workshop, we discussed the "s1:
          Simple test-time scaling" paper by Muennighoff, Yang, Shi, Li, and
          others. Test-time compute is a method where a model receives
          additional computational resources during its inference phase. For
          example, if a model needs to solve a complex problem, a test-time
          compute strategy may have the model introspect and refine its answers
          before giving a final answer — in refining the answer, the model uses
          more compute{' '}
          <LinkComponent href="https://huggingface.co/blog/Kseniase/testtimecompute">
            [1]
          </LinkComponent>
          .
        </Paragraph>

        <Paragraph>
          The s1 paper provides another way to improve a model's reasoning
          capability. The method consists of two steps. First, perform
          supervised fine-tuning (SFT) on a pretrained model using a dataset
          that contains another model's reasoning traces (the text that a model
          outputs while it reasons). Concretely, the dataset contains many text
          examples of Gemini's reasoning output, and the paper finds that with
          1000 curated examples, a 32-billion parameter (32B) Qwem model can be
          adjusted to model that reasoning behavior.
        </Paragraph>

        <Paragraph>
          Second, during inference, we apply <strong>budget forcing</strong> to
          the model. Budget forcing is a method to have the model reason for a
          set number of tokens. Specifically, the model will demark its
          reasoning output in between <code>think</code> tags, and the model
          will continue outputting tokens in the <code>think</code> region until
          its output occupies the aforementioned limit. If the reasoning output
          does not meet the reasoning budget, we append "Wait" to the model's
          output and then have the model continue generating tokens. Appending
          "Wait" to the finetuned model's output can lead it to continue
          reasoning and double-check its answer.
        </Paragraph>

        <Paragraph>
          These results look amazing, so the AI Clinic held a workshop to cover
          three topics:
        </Paragraph>
        <ol>
          <li>Implement s1 ourselves</li>
          <li>Apply techniques to make the most of a limited GPU</li>
          <li>Learn about the HuggingFace environment</li>
        </ol>

        <Paragraph>
          <LinkComponent href="https://github.com/jrmkim50/s1_reasoning_qwem_3b/tree/main">
            Our code has been released on our Github.
          </LinkComponent>
        </Paragraph>
      </Section>
      <Section>
        <Title>Technical notes</Title>
        <Paragraph>
          The initial version of this project was implemented on a Google Colab
          notebook using their free GPU. While it is possible to implement s1
          and the notes below with a 1.5B Qwem model (the largest one that can
          fit on Colab's GPU), Colab's timeout mechanisms may interfere with the
          finetuning process — if you aren't vigilant, the notebook will get
          shut down while training occurs.
        </Paragraph>
        <Paragraph>
          In order to work in a more suitable environment, we rented a GPU on
          the Vast.ai platform. For $5, we rented one 48 GB Nvidia A40 GPU for
          10 hours. In this time, we trained a 3B Qwem model and reviewed its
          reasoning capability. You can follow along with the aforementioned
          Github repository.
        </Paragraph>
        <Paragraph>
          Here are the key notes for applying the s1 methodology on a limited
          GPU:
        </Paragraph>
        <ol>
          <li>
            We train the Qwem model on a pared down dataset. First, we take the
            s1 authors' full dataset of 59,000 reasoning traces. Then, we filter
            the dataset for reasoning traces that consist of no more than 2300
            tokens. This limit is imposed because the model cannot be trained to
            output a significantly larger number of tokens on a limited GPU. On
            a smaller GPU (such as Collab's free GPU), this limit likely needs
            to be decreased.
          </li>
          <li>
            In order to fit and train a 3B model, we quantize the model and
            perform LoRA updates. Quantizing is a "model compression technique
            that converts the weights and activations within an LLM from a
            high-precision data representation to a lower-precision data
            representation"{' '}
            <LinkComponent href="https://symbl.ai/developers/blog/a-guide-to-quantization-in-llms/">
              [2]
            </LinkComponent>
            . For example, a model typically contains many 32-bit floats
            (decimal numbers), and a quantized model may truncate those decimals
            to 4-bit integers. <br></br>
            <br></br> LoRA refers to a technique to efficiently finetune models
            by modeling weight changes as low-rank matrices. Importantly, a
            low-rank matrix can be represented in a more compact format,
            reducing the amount of GPU memory required to adapt a model to a new
            dataset.
          </li>
          <li>
            Finally, we run SFT using HuggingFace's <code>TRL</code> library.
            During SFT, the model is trained on the provided reasoning traces,
            enabling it to learn patterns and structures that underly reasoning.
          </li>
        </ol>
      </Section>
      <Section>
        <Title>Reasoning Observations</Title>
        <Paragraph>
          We only appended "Wait" once to the model's output, so in this
          workshop, we did not implement budget forcing. However, it was still
          interesting to see how SFT affected the model's behavior.
          Specifically, after SFT, the model knew how to use <code>think</code>{' '}
          tags and it also reasoned for many more tokens.
        </Paragraph>
        <Paragraph>
          The base Qwem model does not make effective use of the{' '}
          <code>think</code> tag. See the example below. The initial query ends
          at <code>&lt;|im_start|&gt;think</code>, and instead of starting a new
          line after <code>think</code>, the model output completes the query to{' '}
          <code>thinker</code>.
        </Paragraph>
        <Code language="c" code={thinker_example}></Code>
        <Paragraph>
          After SFT, the model properly handles <code>think</code>:
        </Paragraph>
        <Code language="c" code={think_after_sft}></Code>
        <Paragraph>
          The second observation is more informal, where in a few examples, we
          observed the base model arriving at a final answer in fewer tokens
          than the finetuned model. Of course, with budget forcing, it would
          lead the base model to continue reasoning until it reaches the
          provided budget.
        </Paragraph>
        <Paragraph>
          Now, one really interesting output is that when the finetuned model is
          asked to arrange the letters in "LISTEN" into a related word, it
          attempts (albeit unsuccessfully) to rearrange the letters itself. The
          base model did not show this behavior.
        </Paragraph>
        <Code language="c" code={listen}></Code>
      </Section>
      <Section>
        <Title>Final notes</Title>
        <Paragraph>
          In our initial tests, the finetuned 3B Qwem model did not give correct
          answers to questions like "How many r's are in raspberry?" or
          "Rearrange the letters in 'LISTEN' to form another related word."
          Perhaps this behavior could be corrected by implementing budget
          forcing.
        </Paragraph>
        <Paragraph>
          We note that this behavior can be further explained by this project's
          limitations.
        </Paragraph>
        <ol>
          <li>The model is finetuned on 3B parameters, not 32B.</li>
          <li>
            The reasoning traces are limited to those which are under 2300
            tokens, which reduces the quality of our dataset
          </li>
        </ol>
        <Paragraph>
          The workshop still teaches the AI Clinic a lot about topics like
          efficient training, SFT, and using the HuggingFace environment, in
          addition to revealing the interesting behaviors from the finetuned
          model that we have discussed above.
        </Paragraph>
      </Section>
    </Layout>
  );
}
