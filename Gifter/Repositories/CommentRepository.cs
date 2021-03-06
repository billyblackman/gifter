﻿using System.Linq;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Gifter.Data;
using Gifter.Models;

namespace Gifter.Repositories
{
    public class CommentRepository
    {
        private readonly ApplicationDbContext _context;

        public CommentRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<Comment> GetAll()
        {
            return _context.Comment.Include(c => c.UserProfile).ToList();
        }

        public Comment GetById(int id)
        {
            return _context.Comment.Include(p => p.UserProfile).FirstOrDefault(p => p.Id == id);
        }

        public List<Comment> GetByUserProfileId(int id)
        {
            return _context.Comment.Include(c => c.UserProfile)
                            .Where(c => c.UserProfileId == id)
                            .OrderBy(c => c.PostId)
                            .ToList();
        }

        public List<Comment> GetByPostId(int id)
        {
            return _context.Comment.Include(c => c.Post)
                            .Where(c => c.PostId == id)
                            .OrderBy(c => c.PostId)
                            .ToList();
        }

        public void Add(Comment comment)
        {
            _context.Add(comment);
            _context.SaveChanges();
        }

        public void Update(Comment comment)
        {
            _context.Entry(comment).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var comment = GetById(id);
            _context.Comment.Remove(comment);
            _context.SaveChanges();
        }

    }
}