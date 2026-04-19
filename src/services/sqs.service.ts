import { sqs } from "../config/aws";

export const sendMessage = async (message: any) => {
  const params = {
    QueueUrl: process.env.SQS_URL!,
    MessageBody: JSON.stringify(message),
  };

  await sqs.sendMessage(params).promise();
};
