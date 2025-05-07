export interface CreateMessageDTO {
  content: string;
  chatId: string;
  senderId: string;
  repliedToId?: string;
}
