import { Transaction } from '@prisma/client';
import { omit } from 'lodash';
import { prisma } from '.';

function getTransactions(userId: number, skip: number = 0, limit: number = 100) {
    return prisma.transaction.findMany({
        where: {
            userId,
        },
        orderBy: {
            createdAt: 'desc',
        },
        skip,
        take: limit,
    });
}

async function addTransaction(userId: number, data: Omit<Transaction, 'id' | 'user' | 'userId'>) {
    const newTransaction = await prisma.transaction.create({
        data: {
            ...omit(data, 'accountId', 'prevTransactionId'),
            user: { connect: { id: userId } },
            account: { connect: { id: data.accountId } },
            prevTransaction: data.prevTransactionId ? { connect: { id: data.prevTransactionId } } : undefined,
        },
    });

    return newTransaction;
}

async function editTransaction(userId: number, id: number, data: Transaction) {
    const transaction = await prisma.transaction.findFirst({ where: { id, userId } });

    if (!transaction || transaction.userId !== userId) {
        throw new Error('Transaction not found');
    }

    return prisma.transaction.update({
        where: { id },
        data: {
            ...transaction,
            ...data,
            amount: transaction.amount,
        },
    });
}

async function getTransactionById(userId: number, id: number) {
    const transaction = await prisma.transaction.findFirst({ where: { id, userId } });

    if (!transaction || transaction.userId !== userId) {
        throw new Error('Transaction not found');
    }

    return transaction;
}

export { Transaction, getTransactions, addTransaction, editTransaction, getTransactionById };
